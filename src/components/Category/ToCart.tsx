import { Button, Modal } from 'flowbite-react';
import * as React from 'react';
import { Products } from '../../Types/Redux';
import { BsCartPlus } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AddToLocalCart } from '../../Redux/Handlers/Cart';
import { AddToCart } from '../../Redux/Handlers/Cart/AsyncThunks';

interface PropType {
  currency: string;
  product: Products;
}

const UpdateCart = (prop: PropType) => {
  const [openModal, setOpenModal] = React.useState<string | undefined>();
  const [amount, setAmount] = React.useState<number>(1);
  const auth = JSON.parse(sessionStorage.getItem('user')!);
  const dispatch = useDispatch();
  const handleClick = (arg: 'add' | 'subtract') => {
    if (arg === 'add') {
      setAmount(amount + 1);
    }
    if (arg === 'subtract' && amount > 1) {
      setAmount((prevAmount) => --prevAmount);
    }
  };
  const handleSubmit = () => {
    dispatch(
      AddToLocalCart({
        cart: {
          amount,
          product: prop.product,
          id: prop.product.id,
        },
      }),
    );
    dispatch(
      AddToCart({
        userId: auth.id,
        id: prop.product.id,
        date: Date(),
        product: [{ productID: prop.product.id, amount }],
      }),
    );
    setOpenModal(undefined);
  };
  return (
    <>
      {auth && (
        <Button onClick={() => setOpenModal('dismissible')}>
          Add to cart <BsCartPlus className='ml-3 w-5 h-5' />
        </Button>
      )}
      <Modal dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Cart</Modal.Header>
        <Modal.Body>
          <div className='space-y-6 lg:flex lg:justify-between w-full'>
            <img
              src={prop.product.image}
              alt={prop.product.title}
              className=' m-auto lg:h-16 lg:w-16 w-1/2 h-24 my-10 rounded-md shadow-xl'
            />
            <div className='lg:w-2/3 w-full'>
              <h2 className='font-Onest font-semibold capitalize text-gray-400 text-center '>
                {prop.product.title}
              </h2>
              <h2 className='my-2 font-bold font-Raleway text-xl text-center'>
                {prop.currency} {prop.product.price}
              </h2>
              <div className='flex justify-center'>
                <Button onClick={() => handleClick('subtract')}>
                  <FaMinus className=' w-5 h-5' />
                </Button>
                <h2 className='text-3xl w-20 text-center font-extrabold'>{amount}</h2>
                <Button onClick={() => handleClick('add')}>
                  <FaPlus className='w-5 h-5 text-white' />
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex justify-between'>
          <Button onClick={handleSubmit}>I accept</Button>
          <Button color='gray' onClick={() => setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateCart;
