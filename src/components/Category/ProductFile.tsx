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
    <div className='w-full lg:flex lg:justify-between  rounded-md shadow-xl lg:shadow-sm'>
      <img
        src={prop.product.image}
        alt={prop.product.title}
        className='lg:w-2/5 w-2/3 m-auto h-72 my-10 rounded-md shadow-xl'
      />
      <div className='lg:w-2/5 w-3/4 m-auto'>
        <h2 className='font-Onest font-semibold lg:text-start text-center text-xl capitalize text-gray-400 '>
          {prop.product.title}
        </h2>
        <p className='font-YoungSerif lg:text-start text-center text-lg line-clamp-3 my-2 capitalize text-black '>
          {prop.product.description}
        </p>
        <Rating>
          <Rating.Star />
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>
            {prop.product.rating.rate}
          </p>
          <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400' />
          <a className='text-sm font-medium font-PermanentMarker text-gray-900 underline hover:no-underline dark:text-white'>
            <p>{prop.product.rating.count} votes</p>
          </a>
        </Rating>
        <h2 className='my-2 font-bold font-Raleway text-cyan-900 text-xl'>
          {currency} {prop.product.price}
        </h2>
        <UpdateCart product={prop.product} currency={currency} />
      </div>
    </div>
  );
};

export default ProductFile;
