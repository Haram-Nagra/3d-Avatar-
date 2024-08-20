import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} flex flex-row gap-5 absolute items-start top-[120px] inset-0  max-w-7xl mx-auto`}>
        
        <div className='flex flex-col mt-5 items-center justify-center'>
          <div className='w-5 h-5 rounded-full flex bg-[#bd2843] '/>
          <div className='w-1 sm:h-80 h-40 rose-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}> Hi I'm  <span className='text-[#bd2843]'>Haram Iqbal Nagra</span></h1>
          <p>
            I develop 3D viuals,user interfaces <br className="sm:block hidden"/>
            and full-stack web appliactions.
          </p>
        </div>

      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-8 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[56px] rounded-3xl border-4 border-secondary
          flex items-start p-2 justify-center'>
              <motion.div
                animate ={{
                  y:[0,2,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:"loop"
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero