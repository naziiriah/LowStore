import { motion } from 'framer-motion';
/* eslint-disable react/react-in-jsx-scope */
import WaveAnimation from '../common/WaveAnimation';

const IntroductionSection = () => {
  return (
    <motion.article
      transition={{ delay: 0.2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='w-full lg:h-screen h-96
      bg-cover bg-homeBGSM
      lg:bg-homeBG 
      md:bg-homeBG
      xl:bg-homeBG

      flex justify-start'
    >
      <motion.div className='lg:w-7/12 h-full w-full lg:bg-blackBG lg:bg-cover '>
        <div className='w-9/12 m-auto mt-28 h-72'>
          <motion.h1
            transition={{ ease: 'linear', duration: 2, x: { duration: 1 } }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-white lg:text-6xl text-2xl uppercase font-Raleway font-bold  text-center lg:my-10 mt-1'
          >
            The LoweStore
          </motion.h1>
        </div>
        <div className='-mt-20 lg:mt-0 md:mt-0 xl:mt-0'>
          <WaveAnimation />
        </div>
      </motion.div>
    </motion.article>
  );
};

export default IntroductionSection;
