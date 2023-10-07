import { Card } from 'flowbite-react';
import React from 'react';
import { CardPieceprop } from '../../Types/Home';
import { useSelector } from 'react-redux';

const CardPiece = (prop: CardPieceprop) => {
  const product = prop.product;
  const { currency } = useSelector((state) => state.resource);
  return (
    <Card imgAlt={product.title} imgSrc={product.image}>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        <p>{product.title}</p>
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        <p>{product.description}</p>
      </p>
      <p>
        <h1 className='font-PermanentMarker text-2xl text-gray-900'>
          {currency} {product.price}
        </h1>
      </p>

      <p className='w-full flex justify-end'>
        <h5 className='font-PermanentMarker text-2xl text-gray-900'>
          {currency} {product.rating}
        </h5>
      </p>
    </Card>
  );
};

export default CardPiece;
