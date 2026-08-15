import React from "react";
import { useState, useEffect, useRef } from "react";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/sectionWrapper";
import { BallGridCanvas, CELL } from "./canvas/Ball";

const MAX_COLUMNS = 6;

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState(MAX_COLUMNS);
  const wrapRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Columns come from the measured width so the 3D grid wraps like the old
  // flex layout did.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const fit = Math.floor(el.clientWidth / CELL);
      setColumns(Math.max(2, Math.min(MAX_COLUMNS, fit)));
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  const rows = Math.ceil(technologies.length / columns);

  return (
    <>
      {!isMobile && (
        <div ref={wrapRef} className="w-full">
          <div style={{ height: rows * CELL + 24 }}>
            <BallGridCanvas items={technologies} columns={columns} />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
