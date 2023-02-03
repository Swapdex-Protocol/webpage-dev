'use client';

import styles from '../styles';
import NavButton from './NavButton';

const Navbar = () => (
  <div className="pt-4 bg-SDX-900">
    <div className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex justify-between items-center`}>
      <div className="flex gap-[10px]">
        <img
          src="/swapdex-logo-icon.svg"
          alt="swapdex-logo"
          className="w-[37px] object-contain"
        />
        <h2 className="font-semibold text-[18px] leading-[20px] my-auto mobile-m:text-[24px] mobile-m:leading-[30px] text-SDX-200">
          SwapDEX
        </h2>
      </div>
      <div className="laptop-s:flex gap-[23px] align-middle mobile-s:hidden">
        <a href="#blockchain" className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">Blockchain</a>
        <a href="#wallet" className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">Wallet</a>
        <a href="#dex" className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">DEX</a>
        <a href="#NFTMarketplace" className="font-regular text-[18px] leading-[24px] text-SDX-200 hover:text-white">NFT Marketplace</a>
      </div>
      <NavButton href="https://app.swapdex.network/#/swapdex/" target="_blank" className="nav-button-gradient text-[12px] leading-4 mobile-m:text-[16px] mobile-m:leading-5 tablet-s:text-[18px] tablet-s:leading-5">
        Launch App
      </NavButton>
    </div>

    <div className="h-[1px] bg-SDX-300 w-full align-bottom mt-4 opacity-25" />
  </div>
);

export default Navbar;
