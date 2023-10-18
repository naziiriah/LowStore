/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import AuthLogin from './AuthLogin';
import { BsFillPersonPlusFill } from 'react-icons/bs';

type AuthHandler = 'LOGIN' | 'SIGNUP';
const AuthHandler = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();

  return (
    <>
      <Button className=' shadow-xl' onClick={() => setOpenModal('form-elements')}>
        Log in
        <BsFillPersonPlusFill className='ml-3 w-5 h-5' />
      </Button>
      <Modal
        show={openModal === 'form-elements'}
        size='md'
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <AuthLogin />
      </Modal>
    </>
  );
};

export default AuthHandler;
