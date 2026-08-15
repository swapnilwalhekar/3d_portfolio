import React, { Suspense, useCallback, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

/* Orthographic units → pixels, so the 3D grid lines up with the CSS layout:
   a ball is 2 * BALL_SCALE * ZOOM px wide and cells sit CELL px apart. */
export const ZOOM = 20;
const BALL_SCALE = 2.75;
const SPACING = 7.6;
export const CELL = SPACING * ZOOM;

/* Spin feel. Radians turned per pixel dragged. */
const DRAG_SPEED = 0.03;
/* Exponential decay of the flick, per second — lower coasts longer.
   1.5 gives roughly two free revolutions off a hard throw, spent in ~3s. */
const FRICTION = 1.5;
/* Below this (rad/s) the coast is over and the settle timer starts. */
const STOP_SPEED = 0.2;
/* Rad/s ceiling, so a violent flick can't spin into a blur. */
const MAX_SPEED = 20;
/* Seconds to rest at the resting angle before easing back to face front. */
const SETTLE_DELAY = 0.7;
/* Approach rate of that ease-back. */
const SETTLE_SPEED = 2.6;
const TWO_PI = Math.PI * 2;

/* Shared across balls: while one is being dragged, a neighbour passing under
   the pointer must not steal the cursor back to "grab". */
let isDragging = false;

const Ball = ({ imgUrl, position = [0, 0, 0], draggable = false }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef(null);
  const endDragRef = useRef(null);
  // vx/vy: angular velocity in rad/s. held: pointer is down. rest: seconds
  // spent stopped, which triggers the ease back to front.
  const spin = useRef({ vx: 0, vy: 0, held: false, rest: 0 });

  /* Drag-to-spin, per ball. OrbitControls can't do this in a shared canvas —
     it drives the one camera, so grabbing any ball would turn all of them.
     Rotating the mesh itself keeps each ball independent; Float transforms its
     own group, so the idle bob still composes on top. */
  const onPointerDown = useCallback((e) => {
    e.stopPropagation();
    const last = { x: e.clientX, y: e.clientY, t: performance.now() };
    const s = spin.current;
    s.held = true;
    s.vx = 0;
    s.vy = 0;
    s.rest = 0;

    const move = (ev) => {
      const mesh = meshRef.current;
      if (!mesh) return;
      const now = performance.now();
      // Clamp dt: a stalled frame would otherwise read as a huge flick.
      const dt = Math.min(0.1, Math.max(0.001, (now - last.t) / 1000));
      const dy = (ev.clientX - last.x) * DRAG_SPEED;
      const dx = (ev.clientY - last.y) * DRAG_SPEED;

      mesh.rotation.y += dy;
      mesh.rotation.x += dx;

      // Smooth a little so one jittery sample doesn't define the throw.
      s.vy = 0.75 * (dy / dt) + 0.25 * s.vy;
      s.vx = 0.75 * (dx / dt) + 0.25 * s.vx;
      last.x = ev.clientX;
      last.y = ev.clientY;
      last.t = now;
    };

    const end = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      endDragRef.current = null;
      isDragging = false;
      // Hand the throw over to the coast in useFrame.
      s.held = false;
      s.rest = 0;
      s.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, s.vx));
      s.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, s.vy));
      document.body.style.cursor = "";
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    endDragRef.current = end;
    isDragging = true;
    document.body.style.cursor = "grabbing";
  }, []);

  // Unmounting mid-drag would otherwise strand the window listeners.
  useEffect(() => () => endDragRef.current?.(), []);

  /* Coast after the throw, then drift back to facing front. The rest angle is
     the nearest whole turn, so it unwinds the short way rather than rewinding
     every revolution the flick added. */
  useFrame((_, delta) => {
    const mesh = meshRef.current;
    const s = spin.current;
    if (!draggable || !mesh || s.held) return;
    const dt = Math.min(0.05, delta);

    if (Math.abs(s.vx) > STOP_SPEED || Math.abs(s.vy) > STOP_SPEED) {
      mesh.rotation.y += s.vy * dt;
      mesh.rotation.x += s.vx * dt;
      const decay = Math.exp(-FRICTION * dt);
      s.vx *= decay;
      s.vy *= decay;
      s.rest = 0;
      return;
    }

    s.vx = 0;
    s.vy = 0;
    s.rest += dt;
    if (s.rest < SETTLE_DELAY) return;

    const k = 1 - Math.exp(-SETTLE_SPEED * dt);
    const homeX = Math.round(mesh.rotation.x / TWO_PI) * TWO_PI;
    const homeY = Math.round(mesh.rotation.y / TWO_PI) * TWO_PI;
    mesh.rotation.x += (homeX - mesh.rotation.x) * k;
    mesh.rotation.y += (homeY - mesh.rotation.y) * k;
  });

  const handlers = draggable
    ? {
        onPointerDown,
        onPointerOver: () => {
          if (!isDragging) document.body.style.cursor = "grab";
        },
        onPointerOut: () => {
          if (!isDragging) document.body.style.cursor = "";
        },
      }
    : {};

  return (
    <group position={position}>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} castShadow receiveShadow scale={BALL_SCALE} {...handlers}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />

          {/* Decal is used for applying textures for balls */}
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </group>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      // frameloop="demand"
      gl={{ preserveDrawingBuffer: true }} // properly render model
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

/**
 * Every icon in ONE canvas. A browser caps active WebGL contexts at ~16 and
 * drops the oldest past that, so a canvas per ball blanked out the hero model
 * once the stack grew. One context also means one renderer and one rAF loop.
 */
export const BallGridCanvas = ({ items, columns }) => {
  const rows = Math.ceil(items.length / columns);

  return (
    <Canvas
      orthographic
      camera={{ zoom: ZOOM, position: [0, 0, 50], near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.05]} />

      <Suspense fallback={<CanvasLoader />}>
        {items.map((item, i) => {
          const row = Math.floor(i / columns);
          const col = i % columns;
          // Centre each row on its own, so a short last row isn't left-heavy.
          const inRow = Math.min(columns, items.length - row * columns);
          const x = (col - (inRow - 1) / 2) * SPACING;
          const y = ((rows - 1) / 2 - row) * SPACING;
          return (
            <Ball key={item.name} imgUrl={item.icon} position={[x, y, 0]} draggable />
          );
        })}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
