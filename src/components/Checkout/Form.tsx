import { Label, TextInput } from 'flowbite-react';
/* eslint-disable react/react-in-jsx-scope */
const CheckoutForm = () => {
  const auth = JSON.parse(sessionStorage.getItem('user')!);
  return (
    <section className='w-full bg-white  rounded-md shadow-md'>
      <div className='w-11/12 m-auto'>
        <div className='w-full h-10 mb-10 pt-5'>
          <h2 className='font-Raleway text-4xl font-bold capitalize'>Checkout</h2>
        </div>
        <h2 className='font-Raleway text-lg font-bold capitalize text-slate-400'>
          Billing details
        </h2>
        <div className='flex w-full flex-col gap-2 my-3'>
          <div className='lg:flex lg:justify-between lg:mb-3'>
            <div className='lg:w-6/12 mb-5 lg:my-0'>
              <div className='mb-2 block'>
                <Label htmlFor='name' value='name' className='uppercase' />
              </div>
              <TextInput
                id='small'
                sizing='md'
                type='text'
                className='lg:w-11/12 w-full '
                placeholder='Nazir Abubakar'
              />
            </div>
            <div className='lg:w-6/12 my-3 lg:my-0'>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='E-Mail address' className='uppercase' />
              </div>
              <TextInput sizing='md' type='text' className='w-full' value={auth.user} />
            </div>
          </div>

          <div>
            <div className='mb-2 block lg:my-0 '>
              <Label htmlFor='phone' value='phone number' className='uppercase' />
            </div>
            <TextInput sizing='md' type='text' className='lg:w-2/3 ' />
          </div>
          <div className='h-10'></div>
          <h2 className='font-Raleway text-lg font-bold capitalize text-slate-400'>
            Shipping info
          </h2>
          <div>
            <div className='block my-3 lg:mb-2'>
              <Label htmlFor='large' value='address' className='uppercase' />
            </div>
            <TextInput id='large' sizing='md' type='text' className='w-full' />
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className='lg:w-6/12 w-full '>
              <div className='my-3 lg:mb-2'>
                <Label htmlFor='small' value='zip code' className='uppercase' />
              </div>
              <TextInput id='small' sizing='md' type='text' className='lg:w-11/12 w-full' />
            </div>
            <div className='lg:w-6/12 w-full m-auto'>
              <div className='my-3 lg:mb-2'>
                <Label htmlFor='base' value='city' className='uppercase' />
              </div>
              <TextInput id='' sizing='md' type='text' className=' w-full ' />
            </div>
          </div>
          <div>
            <div className='my-3 lg:mb-2'>
              <Label htmlFor='base' value='country' className='uppercase' />
            </div>
            <TextInput id='base' sizing='md' type='text' className='lg:w-2/3  w-full' />
          </div>
          <div className='h-10'></div>
          <h2 className='font-Raleway text-lg font-bold capitalize text-slate-400'>
            Payment details
          </h2>
          <h3>Payment Method</h3>
          <p>
            The &apos;Cash on Delivery &apos; option enables you to pay in cash when our delivery
            courier arrives at your residence. Just make sure your address is correct so that your
            order will not be cancelled.
          </p>
          <div className='h-5'></div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
