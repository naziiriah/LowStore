import { Button, Modal } from 'flowbite-react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ClearCart } from '../../Redux/Handlers/Cart';
import { useNavigate } from 'react-router-dom';

interface PropType {
  grandTotal: number;
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
        <Modal.Header>Cart</Modal.Header>
        <Modal.Body>
          <div>{prop.grandTotal}</div>
        </Modal.Body>
        <Modal.Footer className='flex justify-between'>
          <Button color='gray' className='w-full' onClick={handleSubmit}>
            I accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutModal;
