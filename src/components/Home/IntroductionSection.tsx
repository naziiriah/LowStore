import { motion } from 'framer-motion';
import React from 'react';

const IntroductionSection = () => {
  return (
    <motion.article
      transition={{ delay: 0.3 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='w-full h-screen bg-black 
      xl:bg-homeBG xl:bg-cover 
      lg:bg-homeBG lg:bg-cover 
      md:bg-cover md:bg-homeBGSM 
      sm:bg-cover sm:bg-homeBGSM'
    >
        <div className='m-auto w-4/5 sm:w-11/12'>
            <h2 className='font-PermanentMarker text-rose-700 text-lg'>Clothing</h2>
        </div>
    </motion.article>
  );
};

export default IntroductionSection;
