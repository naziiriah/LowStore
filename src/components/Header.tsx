/* eslint-disable react/react-in-jsx-scope */
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import AuthHandler from './Auth/AuthHandler';
import { motion } from 'framer-motion';
import AlertWithIcon from './common/AlertComponents';
import CartModal from './Cart/CartModal';
const Header = () => {
  const auth = JSON.parse(sessionStorage.getItem('user')!);
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href='/'>
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            LoweStore
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
          <motion.a whileHover={{ scale: 1.1 }} href='/' className='capitalize'>
            <p>Home</p>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/category/men's clothing"
            className='capitalize'
          >
            men
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/category/women's clothing"
            className='capitalize'
          >
            women
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='/category/jewelery' className='capitalize'>
            jewelery
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='/category/electronics' className='capitalize'>
            electronic
          </motion.a>
        </Navbar.Collapse>
      </Navbar>
      <AlertWithIcon />
    </>
  );
};

export default Header;
