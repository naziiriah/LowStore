import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import React from 'react';
import AuthHandler from './Auth/AuthHandler';
import { motion } from 'framer-motion';
import AlertWithIcon from './common/AlertComponents';

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
            <Dropdown arrowIcon={false} inline label={<Avatar alt='User settings' rounded />}>
              <Dropdown.Header>
                <span className='block text-sm'>{auth.user}</span>
              </Dropdown.Header>
            </Dropdown>
          ) : (
            <AuthHandler />
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href='/'>
            <p>Home</p>
          </Navbar.Link>
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
