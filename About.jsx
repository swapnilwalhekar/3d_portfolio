import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
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
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}> Introduction </p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores amet
        nam sit, doloribus iure id sint ipsa eos minus omnis quas unde nesciunt,
        odio architecto consectetur asperiores maxime eligendi? Et. Eveniet
        nostrum perspiciatis optio vero? Ipsa beatae alias voluptatem delectus
        eligendi praesentium ab mollitia veritatis minima vitae et quidem
        adipisci at aliquam excepturi dolores perspiciatis blanditiis, expedita
        cupiditate, unde doloremque.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
