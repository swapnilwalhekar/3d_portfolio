import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/sectionWrapper";
// import {fadeIn, textVarient} from '../utils';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center flex-col items-center"
      >
        <p className={styles.sectionSubText}> MY </p>
        <h2 className={styles.heroHeadText}>Tech Stack</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="">
        <span className="ml-10">2 year of experience in</span> frontend web
        development with hands-on experience in identifying web-based user
        interactions along with designing and implementing highly-responsive
        user interface components. Proficient in translating designs and
        wireframes into high- quality code, and writing application interface
        code via JavaScript and React JS workflows.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
