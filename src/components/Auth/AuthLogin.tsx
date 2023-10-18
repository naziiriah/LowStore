/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpinningIndicator from '../common/Spinner';
import { CreateUser } from '../../Redux/Handlers/User/AsyncThunks';
import SuccessAnimation from '../common/Success';
import { Action, Dispatch } from '@reduxjs/toolkit';

interface stateProps {
  user: {
    userStatus: 'SUCCESSFUL' | 'PENDING';
  };
}

type DispatchTypeForReduxCalls = Action<any>;

const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: Dispatch<DispatchTypeForReduxCalls> = useDispatch();
  const { userStatus } = useSelector((state: stateProps) => state.user);
  const onSubmit = () => {
    const data = {
      username: email,
      password,
    };
    dispatch(CreateUser({ data }));
  };

  return (
    <Modal.Body>
      <div className='space-y-6'>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
          Log in to our platform
        </h3>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Your email' />
          </div>
          <TextInput
            id='email'
            placeholder='name@company.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Your password' />
          </div>
          <TextInput
            id='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='w-full flex '>
          <Button onClick={onSubmit}>Log in to your account</Button>
          {userStatus === 'PENDING' && (
            <div className='my-2 mx-6'>
              <SpinningIndicator />
            </div>
          )}
          {userStatus === 'SUCCESSFUL' && <SuccessAnimation styles={'w-10 h-10'} />}
        </div>
      </div>
    </Modal.Body>
  );
};

export default AuthLogin;
