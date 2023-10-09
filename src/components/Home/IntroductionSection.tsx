import { motion } from 'framer-motion';
import React from 'react';
import WaveAnimation from '../common/WaveAnimation';

const IntroductionSection = () => {
  return (
    <motion.article
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='w-full h-screen
      bg-cover bg-homeBGSM
      lg:bg-homeBG 
      md:bg-homeBG
      xl:bg-homeBG
      flex justify-start'
    >
      <motion.div className='w-7/12 h-full bg-blackBG bg-cover'>
        <div className='w-9/12 m-auto mt-28 h-72'>
          <motion.h1
            transition={{ ease: 'linear', duration: 2, x: { duration: 1 } }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-white text-6xl uppercase font-Raleway font-bold  text-start my-10'
          >
            The LoweStore
          </motion.h1>
        </div>
        <WaveAnimation />
      </motion.div>
    </motion.article>
  );
};

export default IntroductionSection;
