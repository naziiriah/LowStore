import { motion } from 'framer-motion';
import React from 'react';
import advert1 from '../../assets/images/istockphoto-1249219777-612x612.jpg';
import advert2 from '../../assets/images/image-best-gear.jpg';
const SecondSection = () => {
  return (
    <motion.section className=' lg:h-screen w-full'>
      <div className='w-10/12 m-auto lg:my-32 my-10'>
        <h1 className='font-YoungSerif text-5xl text-center'>Welcome to The Lowestore!</h1>
        <article className='lg:flex lg:justify-between w-full'>
          <article className='lg:w-2/5 lg:my-20 my-10'>
            <h2 className='font-YoungSerif text-3xl lg:text-start text-center capitalize my-3 leading-6'>
              About us
            </h2>
            <p className='font-Raleway text-lg text-center lg:text-start my-5'>
              At <span className='font-bold uppercase'>the lowestore</span>, we understand the
              importance of finding quality products that suit your lifestyle, preferences, and
              budget. Whether you &apos;re searching for the latest fashion trends, cutting-edge
              electronics, home essentials, or unique gifts, we&apos;ve got you covered.
            </p>
            <p className='font-Raleway text-lg text-center lg:text-start my-10'>
              Our mission is to provide you with a seamless and enjoyable shopping experience right
              from the comfort of your own home. With a vast and ever-expanding catalog of products,
              a user-friendly interface, and a commitment to customer satisfaction, we strive to
              make online shopping a breeze.
            </p>
            <motion.div
              className='lg:w-32 w-full h-10 bg-black flex justify-center  rounded-3xl hover:cursor-pointer'
              whileTap={{ scale: 0.8 }}
            >
              <a className='mt-2 font-semibold text-white'>More Info</a>
            </motion.div>
          </article>
          <motion.div
            className='lg:w-2/5 w-full flex justify-between mt-20'
            transition={{ ease: 'linear', duration: 2, x: { duration: 1 } }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              alt='advertise-1'
              src={advert2}
              className=' h-96 shadow-xl rounded-xl -ml-40 relative left-20'
            />
            <img
              alt='advertise-1'
              src={advert1}
              className='h-96 shadow-xl  rounded-xl -ml-96  mt-10'
            />
          </motion.div>
        </article>
      </div>
    </motion.section>
  );
};
export default SecondSection;
