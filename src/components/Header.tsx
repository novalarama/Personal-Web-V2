/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

interface HeaderProps {
  logo: string;
  menuItems: string[];
}

const Header: React.FC<HeaderProps> = ({ logo, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-70 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-12 pt-6 pb-6 text-base font-medium text-white max-md:px-5">
        <img loading="lazy" src={logo} alt="Company logo" className="shrink-0 aspect-[1.28] w-[37px]" />
        <div className="hidden md:flex gap-4">
          {menuItems.map((item, index) => (
            <div key={index} tabIndex={0}>{item}</div>
          ))}
        </div>
        <button className="md:hidden focus:outline-none" onClick={handleToggle}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden px-12 pb-6 flex flex-col gap-4 text-base font-medium text-white">
          {menuItems.map((item, index) => (
            <div key={index} tabIndex={0}>{item}</div>
          ))}
        </div>
      </Transition>
    </header>
  );
};

export default Header;
