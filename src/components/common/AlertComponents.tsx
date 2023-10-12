import { Alert } from 'flowbite-react';
import * as React from 'react';

import { HiInformationCircle } from 'react-icons/hi';
import { useSelector } from 'react-redux';

interface stateType {
  cart: {
    cart: [];
    alert: boolean;
  };
}
const AlertWithIcon = () => {
  const [alertInfo, setAlertInfo] = React.useState(false);
  const { cart } = useSelector((state: stateType) => state.cart);
  React.useEffect(() => {
    setAlertInfo(true);

    setTimeout(() => {
      setAlertInfo(false);
    }, 3000);
  }, [cart.length]);
  return (
    alertInfo && (
      <Alert color='success' className='opacity-90 w-2/3 fixed' icon={HiInformationCircle}>
        <span>
          <p>
            <span className='font-medium'>Info alert!</span>
            Item added to Cart
          </p>
        </span>
      </Alert>
    )
  );
};

export default AlertWithIcon;
