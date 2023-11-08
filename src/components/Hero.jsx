import React from 'react'
import { styles } from '../styles'
import ComputerCanvas from './canvas/Computers'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>Hi, I'm <span className='text-[#915eff]'>Swapnil</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200`}>
            I develop front-end web-application, 
            <br className='sm:block hidden'/> 3D visulized appllication's
          </p>
        </div>
      </div>
      <ComputerCanvas/>
    </section>
  )
}

export default Hero