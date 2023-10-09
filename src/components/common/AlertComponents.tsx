import { Alert } from 'flowbite-react';
import React from 'react';
import { HiInformationCircle } from 'react-icons/hi';

export default function AlertWithIcon() {
  return (
    <Alert
      color='failure'
      className='opacity-80 lg:w-1/3 sm:w-full fixed'
      icon={HiInformationCircle}
    >
      <span>
        <p>
          <span className='font-medium'>Info alert!</span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  );
}
