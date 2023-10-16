import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import AuthHandler from './Auth/AuthHandler';
import { motion } from 'framer-motion';
import AlertWithIcon from './common/AlertComponents';
import * as React from 'react';
import CartModal from './Cart/CartModal';
const Header = () => {
  const auth = JSON.parse(sessionStorage.getItem('user')!);
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href='/'>
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            LowStore
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2'>
          {auth ? (
            <div className='flex '>
              <CartModal />
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt='User settings' rounded aria-label='user' />}
              >
                <Dropdown.Header>
                  <span className='block text-sm'>{auth.user}</span>
                </Dropdown.Header>
              </Dropdown>
            </div>
          ) : (
            <AuthHandler />
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <motion.a whileHover={{ scale: 1.2, color: 'blue' }} href='/'>
            <p>Home</p>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2, color: 'blue' }} href='/'>
            About
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href='/'>
            Service
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href='/'>
            Pricing
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href='/'>
            Contact
          </motion.a>
        </Navbar.Collapse>
      </Navbar>
      <AlertWithIcon />
    </>
  );
};

export default Header;
