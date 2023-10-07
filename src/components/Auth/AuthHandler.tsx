/* eslint-disable react/prop-types */

import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import AuthLogin from './AuthLogin';
import AuthSignup from './AuthSignup';

type AuthHandler = 'LOGIN' | 'SIGNUP';
const AuthHandler = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [authProcedure, setAuthProcedures] = useState<AuthHandler>('LOGIN');

  return (
    <>
      <Button onClick={() => setOpenModal('form-elements')}>Sign Up / Log In</Button>
      <Modal
        show={openModal === 'form-elements'}
        size='md'
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        {authProcedure === 'LOGIN' ? (
          <AuthLogin setAuthProcedures={setAuthProcedures} />
        ) : (
          <AuthSignup setAuthProcedures={setAuthProcedures} />
        )}
      </Modal>
    </>
  );
};

export default AuthHandler;
