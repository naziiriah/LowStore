import * as React from 'react';
import { Products } from '../../Types/Redux';
import { Rating } from 'flowbite-react';
import { useSelector } from 'react-redux';
import UpdateCart from './ToCart';

interface PropType {
  product: Products;
}

interface stateType {
  products: {
    currency: string;
  };
}
const ProductFile = (prop: PropType) => {
  const { currency } = useSelector((state: stateType) => state.products);
  return (
    <div className='w-full lg:flex lg:justify-between  rounded-md shadow-xl h-4/5 lg:h-96 bg-gray-100 my-4 lg:shadow-sm'>
      <img
        src={prop.product.image}
        alt={prop.product.title}
        loading='lazy'
        className='lg:w-2/5 w-2/3 m-auto h-72 lg:my-10 rounded-md shadow-xl'
      />
      <div className='lg:w-2/5 w-3/4 m-auto'>
        <h2 className='font-Onest font-semibold lg:text-start text-center lg:text-xl text-lg capitalize my-3 text-gray-400 '>
          {prop.product.title}
        </h2>
        <p className='font-YoungSerif lg:text-start text-center lg:text-lg  line-clamp-3 my-2 capitalize text-black '>
          {prop.product.description}
        </p>
        <Rating className='flex justify-center lg:justify-start'>
          <Rating.Star />
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>
            {prop.product.rating.rate}
          </p>
          <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400' />
          <h2 className='text-sm font-medium font-PermanentMarker text-gray-900 underline hover:no-underline dark:text-white'>
            {prop.product.rating.count} votes
          </h2>
        </Rating>
        <h2 className='my-2 font-bold font-Raleway text-cyan-900 text-center lg:text-left text-xl'>
          {currency} {prop.product.price}
        </h2>
        <div className='flex lg:justify-start justify-center my-4 w-full'>
          <UpdateCart product={prop.product} currency={currency} />
        </div>
        <div className='h-4 w-full'></div>
      </div>
    </div>
  );
};

export default ProductFile;
