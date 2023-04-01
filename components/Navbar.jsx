'use client';

import styles from '../styles';
import NavButton from './NavButton';

const Navbar = () => (
  <div className="pt-4">
    <div className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex justify-between items-center`}>
      <div className="flex gap-[10px]">
        <img
          src="/swapdex-light.png"
          alt="swapdex-logo"
          className="w-[188px] object-contain"
        />
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
      <NavButton href="https://app.swapdex.network/#/swapdex/" target="_blank" className="nav-button-gradient text-[12px] leading-4 mobile-m:text-[16px] mobile-m:leading-5 tablet-s:text-[18px] tablet-s:leading-5">
        Launch App
      </NavButton>
    </div>

    <div className="h-[1px] bg-SDX-300 w-full align-bottom mt-4 opacity-25" />
  </div>
);

export default Navbar;
