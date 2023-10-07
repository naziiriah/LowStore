'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import React from 'react';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

('use client');

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          LowStore
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Dropdown arrowIcon={false} inline label={<Avatar alt='User settings' rounded />}>
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>name@flowbite.com</span>
          </Dropdown.Header>
          <p>Dashboard</p>
          <p>Settings</p>
          <p>Earnings</p>
          <Dropdown.Divider />
          <p>Sign out</p>
        </Dropdown>
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
