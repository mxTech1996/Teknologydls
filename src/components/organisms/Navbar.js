// components/NavBar.jsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className='block md:inline-block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors'
  >
    {children}
  </Link>
);

const NavBar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gray-800 shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              {data.iconImage ? (
                <Image
                  src={data.iconImage}
                  alt={`${data.name} Logo`}
                  width={50} // Ajusta según el aspect ratio de tu logo
                  height={50} // Ajusta
                  className='h-10 w-auto sm:h-12' // Tailwind classes for responsive height
                />
              ) : (
                <span className='font-bold text-xl text-white'>
                  {data.name}
                </span>
              )}
              <span className='ml-3 font-bold text-xl text-white hidden sm:block'>
                {data.name}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex md:items-center md:space-x-2'>
            <NavLink href='#services'>Services</NavLink>
            <NavLink href='#products'>Products</NavLink>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#testimonials'>Testimonials</NavLink>
            <NavLink href='#info'>Info</NavLink>
            <NavLink href='/more-information'>Contact us</NavLink>

            <Link
              href='/my-cart' // o una página de contacto / cotización
              className='ml-2 inline-flex items-center px-4 py-2 border border-orange-500 text-sm font-medium rounded-md text-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors'
            >
              Go to cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <FiX className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <FiMenu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
