import { Button, Modal } from 'flowbite-react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ClearCart } from '../../Redux/Handlers/Cart';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { CartItem } from '../../Types/Redux/Cart';

interface PropType {
  grandTotal: number;
  cart: CartItem[];
  currency: string;
}

const CheckoutModal = (prop: PropType) => {
  const [openModal, setOpenModal] = React.useState<string | undefined>();
  const auth = JSON.parse(sessionStorage.getItem('user')!);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = () => {
    dispatch(ClearCart());
    setOpenModal(undefined);
    navigation('/');
  };
  return (
    <>
      {auth && (
        <Button
          color='gray'
          className='bg-gray-400 text-white uppercase w-full mt-3'
          onClick={() => setOpenModal('dismissible')}
        >
          Continue
        </Button>
      )}
      <Modal dismissible show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
        <Modal.Body>
          <div className='w-11/12 m-auto'>
            <div className='w-20 h-20 mb-8 bg-gray-400 rounded-full flex justify-center align-middle'>
              <FaCheck className='mt-4 text-5xl' />
            </div>
            <h2 className='font-Raleway uppercase text-4xl font-bold my-2'>
              thank you <br />
              for your order.
            </h2>
            <h4 className='font-Raleway uppercase text-gray-600 '>
              you will receive an email confirmation shortly.
            </h4>
            <div className='lg:flex h-64 w-full rounded-md'>
              <div className='lg:w-2/3 lg:h-full h-2/3 bg-gray-200'>
                <div className='w-11/12 m-auto mt-10'>
                  <div className='flex justify-between w-full py-4'>
                    <img
                      className='w-12 h-12'
                      alt={prop.cart[0].product.title}
                      src={prop.cart[0].product.image}
                      loading='lazy'
                    />
                    <div className='w-4/6 mx-5'>
                      <h2 className='line-clamp-1'>{prop.cart[0].product.title}</h2>
                      <h1 className='font-bold text-lg  font-Raleway'>
                        {prop.currency} {prop.cart[0].product.price}
                      </h1>
                    </div>
                    <div className='font-Raleway text-end font-bold w-1/6'>
                      <h2>X{prop.cart[0].amount}</h2>
                    </div>
                  </div>
                  {prop.cart.length > 1 && (
                    <div className='w-full border-t-2 border-solid border-black'>
                      <h3 className='text-center font-Raleway mt-5'>
                        and {prop.cart.length - 1} other item(s){' '}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
              <div className='lg:w-1/3 lg:h-full h-1/3  bg-black flex align-bottom'>
                <div className='w-11/12 m-auto'>
                  <h3 className='uppercase text-gray-400 lg:text-2xl text-xl lg:text-start text-center'>
                    grand total
                  </h3>
                  <h3 className='uppercase font-bold text-white lg:text-2xl text-xl lg:text-start text-center'>
                    {new Intl.NumberFormat('en-US', {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(prop.grandTotal)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex justify-between'>
          <Button color='gray' className='w-full uppercase' onClick={handleSubmit}>
            Back to home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutModal;
