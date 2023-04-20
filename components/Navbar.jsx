'use client';

import { useState } from 'react';
/* import { useRouter } from 'next/router'; */
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles';

/* this is a component that contains the menu items */
const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/#blockchain';
      case 1: return '/#wallet';
      case 2: return '/#dex';
      case 3: return '/#NFTMarketplace';
      default: return '/';
    }
  };

  return (
    <ul className={`list-none flex justify-center items-center flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Blockchain', 'Wallet', 'DEX', 'NFT Marketplace'].map((item, i) => (
        <div key={i} className="flex flex-col reveal-div mx-3">
          <li
            onClick={() => {
              setActive(item);
              setIsOpen(false);
            }}
            className={`flex flex-row items-center font-regular text-lg hover:text-SDX-LightPink
            ${active === item
              ? 'text-SDX-Pink'
              : 'text-SDX-200'}
              transition-colors duration-300`}
          >
            <Link href={generateLink(i)}>
              {item}
            </Link>
          </li>
          {/* <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" /> */}
        </div>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4">
      <div className={`hidden laptop-s:flex  ${styles.innerWidth} ${styles.xPaddings} mx-auto flex justify-between items-center`}>
        <div className="flex">
          <Link href="/">
            <Image
              src="/swapdex-light.png"
              alt="swapdex-logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* This is the div for the menu on larger screens */}
        <div className="hidden laptop-s:flex ">
          <ul className="list-none flex justify-center items-center flex-row">
            <MenuItems active={active} setActive={setActive} />
          </ul>
        </div>

        <button type="button" className="py-2 px-4 border border-SDX-300 rounded-lg items-center hover:bg-SDX-700 transition-colors duration-300">
          <Link href="/kusari" className="flex flex-row gap-2">
            <Image
              src="/Kusari_Logo.svg"
              alt="Kusari Logo"
              className="object-contain"
              width={28}
              height={50}
            />
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-1">
                <p className="text-SDX-200 font-bold text-sm leading-3">KUSARI</p>
                <i className="fa-solid fa-flask-vial text-[#efc640]" />
              </div>
              <p className="text-SDX-200 font-light text-xs">Dev. Network</p>
            </div>
          </Link>
        </button>
      </div>

      {/* this is the div for the mobile navigation bar */}

      <div className={`${styles.innerWidth} ${styles.xPaddings} flex justify-between items-center laptop-s:hidden py-3`}>
        <div className="flex">
          <Link href="/">
            <Image
              src="/swapdex-light.png"
              alt="swapdex-logo"
              className="object-contain"
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* here we handle the menu bars & cross logic */}
        {isOpen
          ? (
            <i
              className="fa-solid fa-xmark text-SDX-200 text-2xl z-50"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <i
              className="fa-solid fa-bars text-SDX-200 text-2xl z-50"
              onClick={() => setIsOpen(true)}
            />
          )}

        {/* Here we style the mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-SDX-900/90 backdrop-blur-xl nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t border-SDX-300/25">
              <div className="flex justify-end">
                <button type="button" className="py-2 px-4 border border-SDX-300 rounded-lg items-center hover:bg-SDX-700 transition-colors duration-300">
                  <Link href="/kusari" className="flex flex-row gap-2">
                    <Image
                      src="/Kusari_Logo.svg"
                      alt="Kusari Logo"
                      className="object-contain"
                      width={28}
                      height={50}
                    />
                    <div className="flex flex-col items-start">
                      <div className="flex flex-row items-center gap-1">
                        <p className="text-SDX-200 font-bold text-sm leading-3">KUSARI</p>
                        <i className="fa-solid fa-flask-vial text-[#efc640]" />
                      </div>
                      <p className="text-SDX-200 font-light text-xs">Dev. Network</p>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-[1px] bg-SDX-300 w-full align-bottom mt-4 opacity-25" />
    </div>

  );
};

export default Navbar;
