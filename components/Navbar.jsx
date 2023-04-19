'use client';

/* import {  useState , useEffect, useContext } from 'react'; */
/* import { useRouter } from 'next/router'; */
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles';

const Navbar = () => {
  console.log('test');

  return (
    <div className="pt-4">
      <div className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex justify-between items-center`}>
        <div className="flex gap-[10px]">
          <Link href="/">
            <Image
              src="/swapdex-light.png"
              alt="swapdex-logo"
              objectFit="contain"
              width={200}
              height={100}
            />
          </Link>
        </div>

        <div className="laptop-s:flex gap-[23px] align-middle mobile-s:hidden">
          <a href="#blockchain">
            <div className="flex flex-col reveal-div">
              <p className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">Blockchain</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" />
            </div>
          </a>
          <a href="#wallet">
            <div className="flex flex-col reveal-div">
              <p className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">Wallet</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" />
            </div>
          </a>
          <a href="#dex">
            <div className="flex flex-col reveal-div">
              <p className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">DEX</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" />
            </div>
          </a>
          <a href="#NFTMarketplace">
            <div className="flex flex-col reveal-div">
              <p className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">NFT Marketplace</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" />
            </div>
          </a>
        </div>

        <button type="button" className="py-2 px-4 border border-SDX-300 rounded-lg items-center hover:bg-SDX-700 transition-colors duration-300">
          <Link href="/kusari" className="flex flex-row gap-2">
            <Image
              src="/Kusari_Logo.svg"
              alt="Kusari Logo"
              objectFit="contain"
              width={28}
              height={50}
            />
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center gap-1">
                <p className="text-SDX-200 font-bold text-sm leading-3">KUSARI</p>
                <i className="fa-solid fa-flask-vial text-SDX-200" />
              </div>
              <p className="text-SDX-200 font-light text-xs">Dev. Network</p>
            </div>
          </Link>
        </button>
      </div>

      <div className="h-[1px] bg-SDX-300 w-full align-bottom mt-4 opacity-25" />
    </div>
  );
};

export default Navbar;
