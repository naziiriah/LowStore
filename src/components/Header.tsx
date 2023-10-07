import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import React from 'react';
import AuthHandler from './Auth/AuthHandler';

const Header = () => {
  const auth = JSON.parse(sessionStorage.getItem('auth')!);
  return (
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
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>name@flowbite.com</span>
            </Dropdown.Header>
            <p>User Profile</p>
            <p>Settings</p>
            <p>Earnings</p>
            <Dropdown.Divider />
            <Login />
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
        <Navbar.Link href='/'>About</Navbar.Link>
        <Navbar.Link href='/'>Services</Navbar.Link>
        <Navbar.Link href='/'>Pricing</Navbar.Link>
        <Navbar.Link href='/'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
