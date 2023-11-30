// import { useGLTF } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // console.log("swapnil",computer);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight  intensity={1} />
      <primitive 
      object={computer.scene}
      scale = {0.75}
      position = {[0,-3.25,-1.5]}
      rotation = {[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};
const ComputerCanvas = () => {
  Computers();
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }} // properly render model
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 2}
        />
      </Suspense>
      <Computers />
    </Canvas>
  );
};

export default ComputerCanvas;
