import { motion, useScroll } from 'framer-motion';
import React from 'react';
import advert1 from '../../assets/images/istockphoto-1249219777-612x612.jpg';
import advert2 from '../../assets/images/image-best-gear.jpg';
const SecondSection = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.section className='h-screen w-full'>
      <div className='w-10/12 m-auto my-32'>
        <h1 className='font-YoungSerif text-5xl text-center'>Welcome to The Lowestore!</h1>
        <article className='flex justify-between w-full'>
          <article className='w-2/5 my-20'>
            <h2 className='font-YoungSerif text-3xl capitalize my-3 leading-6'>About us</h2>
            <p className='font-Raleway text-lg my-5'>
              At <span className='font-bold uppercase'>the lowestore</span>, we understand the
              importance of finding quality products that suit your lifestyle, preferences, and
              budget. Whether you &apos;re searching for the latest fashion trends, cutting-edge
              electronics, home essentials, or unique gifts, we&apos;ve got you covered.
            </p>
            <p className='font-Raleway text-lg my-5'>
              Our mission is to provide you with a seamless and enjoyable shopping experience right
              from the comfort of your own home. With a vast and ever-expanding catalog of products,
              a user-friendly interface, and a commitment to customer satisfaction, we strive to
              make online shopping a breeze.
            </p>
            <div className='w-32 h-10 bg-black flex justify-center  rounded-3xl hover:cursor-pointer hover__animation'>
              <a className='mt-2 text-white'>More Info</a>
            </div>
          </article>
          <motion.div
            className='w-3/5 flex'
            animate
            transition={{ ease: 'easeIn', duration: 1, x: { duration: 1 } }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <motion.img
              alt='advertise-1'
              src={advert2}
              className='w-2/3 h-96 shadow-xl rounded-xl -ml-40 relative top-40 left-32'
            />
            <motion.img
              alt='advertise-1'
              src={advert1}
              className='w-3/5 h-96 shadow-xl  rounded-xl -ml-20  mt-10'
            />
          </motion.div>
        </article>
      </div>
    </motion.section>
  );
};
export default SecondSection;
