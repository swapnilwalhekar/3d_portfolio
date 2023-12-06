import React from 'react';
import tilt from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
// import {fadeIn, textVarient} from '../utils';

const About = () => {
  console.log("swapnil: fadeIn");

  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}> Introduction </p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default About