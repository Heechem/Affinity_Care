'use client';
import Image from 'next/image';
import navLogo from '../public/navLogo.png';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLink } from '@/lib/data';
import ServiceList from './ServiceList';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeShown = () => {
    setIsShown(false);
  };

  return (
    <>
      <button
        className="sm:hidden top-7 z-[99] right-3 absolute active:scale-105 "
        onClick={toggleIsOpen}
      >
        {isOpen ? (
          <IoMdClose
            hieght={100}
            width={100}
          />
        ) : (
          <MdMenu
            hieght={100}
            width={100}
          />
        )}
      </button>

      {isOpen && (
        // <motion.div
        //   initial={{ opacity: 0, scale: 0 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ type: 'tween', duration: 0.5 }}
        //   className="flex flex-col sm:hidden absolute right-0  items-center opacity-60 bg-gradient-to-br from-slate-100 to-indigo-600 text-black"
        // >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className="flex flex-col sm:hidden absolute right-0 items-center   opacity-90 bg-gradient-to-br from-slate-100 to-indigo-600 text-black h-[220vh] z-50 "
        >
          <div className=" list-none mx-4 my-5 p-2  flex flex-col justify-start h-1/2 ">
            {navLink.map((item, index) => (
              <Link
                href={item.hash}
                key={index}
                className=" px-2 py-8 capitalize  active:scale-105 transition-all ease-in hover:bg-slate-200 hover:p-2 rounded-lg duration-200 hover:font-semibold  text-center"
                onClick={toggleIsOpen}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      <nav className=" flex items-center justify-between p-6  bg-opacity-50   border-b-0 ">
        <div className=" shadow-inner z-[100] ">
          <Link href={'/'}>
            <Image
              src={navLogo}
              width={`${isOpen ? 180 : 250}`}
              height={250}
              alt="logo"
              quality={100}
              className=" rounded-lg"
            />
          </Link>
        </div>
        <div>
          <ul className=" list-none mx-4 p-2 hidden sm:block">
            {navLink.map((item, index) => (
              <Link
                href={item.hash}
                key={index}
                className=" px-2 capitalize  active:scale-105 transition-all ease-in hover:bg-neutral-100 hover:p-2 rounded-lg duration-200 hover:font-semibold  text-center  hover:text-amber-300"
                onMouseEnter={() => {
                  if (item.name === 'Service') {
                    setIsShown(true);
                  } else {
                    setIsShown(false);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </ul>

          <div className={`${isShown ? 'block' : 'hidden'}`}>
            <ServiceList
              clickLink={closeShown}
              mouseLeave={closeShown}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
