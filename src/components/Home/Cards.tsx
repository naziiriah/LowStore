/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CardsPropType {
  url: string;
  description1: string;
  description2?: string;
  categoryName: string;
  image: string;
}
const Cards = (props: CardsPropType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category/${props.url}`);
  };
  return (
    <div className='lg:flex lg:justify-between lg:h-full'>
      <div className='lg:w-3/5 w-full'>
        <img
          src={props.image}
          alt=''
          className='lg:w-9/12  lg:h-3/4 h-52 m-auto mt-10 shadow-xl rounded-xl'
        />
      </div>

      <div className='lg:w-2/5 w-full lg:mt-0 mt-12'>
        <h2 className='font-YoungSerif text-3xl capitalize my-3 leading-6 text-center'>
          {props.categoryName}
        </h2>
        <p className='font-Raleway text-lg my-4 lg:text-start text-center'>{props.description1}</p>
        <p className='font-Raleway text-lg my-4 lg:text-start text-center'>{props.description2}</p>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={handleClick}
          className='hover:cursor-pointer rounded-3xl bg-black  lg:w-32 w-full h-10 text-slate-50 text-sm font-semibold'
        >
          {' '}
          View Category
        </motion.button>
      </div>
    </div>
  );
};

export default Cards;
