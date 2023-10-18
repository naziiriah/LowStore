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
  const { alert } = useSelector((state: stateType) => state.cart);
  React.useEffect(() => {
    if (alert) {
      setAlertInfo(true);

      setTimeout(() => {
        setAlertInfo(false);
      }, 3000);
    }
  }, [alert]);
  return (
    alertInfo && (
      <Alert
        color='success'
        className='opacity-90 lg:w-2/3 w-full fixed'
        icon={HiInformationCircle}
      >
        <span>
          <p>
            <h1 className='font-medium'>Info alert!</h1>
            {alert}
          </p>
        </span>
      </Alert>
    )
  );
};

export default AlertWithIcon;
