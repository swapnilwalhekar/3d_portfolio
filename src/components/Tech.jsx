import React from "react";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/sectionWrapper";
import BallCanvas from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
