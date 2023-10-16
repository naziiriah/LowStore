import * as React from 'react';
import { CartItem } from '../../Types/Redux/Cart';
import { Button } from 'flowbite-react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { RemoveFromLocalCart } from '../../Redux/Handlers/Cart';

interface PropType {
  item: CartItem;
  currency: string;
}
const SingleCartItem = (prop: PropType) => {
  const item = prop.item;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      RemoveFromLocalCart({
        id: prop.item.id,
      }),
    );
  };
  return (
    <div className='flex justify-between w-full my-4'>
      <img className='w-12 h-12' alt={item.product.title} src={item.product.image} loading='lazy' />
      <div className='w-4/6 mx-5'>
        <h2 className='line-clamp-1'>{item.product.title}</h2>
        <h1 className='font-bold text-lg text-gray-800 font-Raleway'>
          {prop.currency} {item.product.price}
        </h1>
      </div>
      <div className='font-Raleway font-bold w-1/6'>
        <h2>X{item.amount}</h2>
      </div>
      <Button color='red' className='bg-red-600 h-10' onClick={handleDelete}>
        {' '}
        <MdDelete className=' text-white' />
      </Button>
    </div>
  );
};

export default SingleCartItem;
