import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpinningIndicator from '../common/Spinner';
import SuccessAnimation from '../common/Success';
import { UserLogin } from '../../Redux/Handlers/Auth/AsyncThunks';
const AuthSignup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state) => state.auth);
  const onSubmit = () => {
    const data = {
      username: email,
      password,
    };
    dispatch(UserLogin({ data }));
  };
  return (
    <Modal.Body>
      <div className='space-y-6'>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
          Sign up to our platform
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
          {authStatus === 'PENDING' && (
            <div className='my-2 mx-6'>
              <SpinningIndicator />
            </div>
          )}
          {authStatus === 'SUCCESSFUL' && <SuccessAnimation styles={'w-10 h-10'} />}
        </div>
        <div className='flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300'>
          Already registered?&nbsp;
          <Button
            onClick={() => props.setAuthProcedures('LOGIN')}
            className='text-cyan-700  dark:text-cyan-500 bg-slate-100 shadow-xl'
          >
            create account
          </Button>
        </div>
      </div>
    </Modal.Body>
  );
};

export default AuthSignup;
