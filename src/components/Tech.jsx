import React from "react";
import { useState, useEffect } from "react";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/sectionWrapper";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

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
  });

  return (
    <>
      {!isMobile && (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => {
            return (
              <div key={index} className="w-28 h-28">
                <BallCanvas icon={technology.icon} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
