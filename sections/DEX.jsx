'use client';

import styles from '../styles';

const DEX = () => (
  <section id="dex" className={`bg-white ${styles.yPaddings} ${styles.xPaddings}`}>
    <div className="relative flex flex-col w-full h-full">
      <div className={`static w-full h-full ${styles.innerWidth} mx-auto z-10`}>
        <div className="flex flex-col w-full">
          <div className="w-full">
            <p className="font-semibold text-[18px] leading-[24px] text-SDX-Pink">LIMIT-ORDER DEX (COMING SOON)</p>
            <h1 className="font-bold text-[30px] leading-[35px] mobile-m:text-[40px] mobile-m:leading-[48px] text-SDX-900">Trade on the most decentralised limit-order DEX, where power belongs to the people</h1>
            <p className="font-medium text-[18px] leading-[24px] text-SDX-900 mt-2">Unlock the true power of decentralisation</p>
          </div>
        </div>
        <div className="static flex w-[800px] sm:w-full rounded-[17px] mt-5 glassmorphism-light px-5 pt-5 min-h-[200px] tablet-s:mt-24">
          <div className="flex flex-col bg-white w-full rounded-[12px]">
            <div className="flex flex-row ml-3 gap-2 my-2">
              <div className="h-3 w-3 rounded-full bg-SDX-Pink" />
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <img src="/DEX-Showcase_03.webp" />
          </div>
        </div>
        <div className="relative grid grid-cols-3 laptop-s:grid-cols-6 justify-items-center laptop-s:justify-between mx-auto tablet-s:mt-10 laptop-s:mt-5 tablet-s:gap-6">
          <p className="font-medium mobile-s:text-[18px] mobile-s:leading-[24px] mobile-s:mt-3 tablet-s:mt-0 tablet-s:text-[20px] tablet-s:leading-6 tablet-s:text-center tablet-s:my-10 text-SDX-900 sm:w-48 tablet-s:w-full my-auto col-span-3 laptop-s:col-span-6">Connected to powerful networks</p>
          <img src="/polygon-matic-logo.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
          <img src="/swapdex-logo-icon.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
          <img src="/bnb-bnb-logo.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
          <img src="/Kusari_Logo.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
          <img src="/ethereum-eth-logo.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
          <img src="/solana-sol-logo.svg" className="mobile-s:h-12 tablet-s:h-16 m-4 sm:my-auto translate-bump shadow-hover-dark" />
        </div>
      </div>
      <div className="absolute mobile-s:w-[1000px] laptop-l:w-full mobile-s:mt-48 mobile-s:-translate-x-40 laptop-s:-translate-x-0 laptop-s:mt-[195px] laptop-s:scale-75 sm:mt-0 bottom-0 top-0 right-0 left-0 z-0">
        <img
          src="/DEX_bg.webp"
          alt="swapdex DeFi"
          className="sm:mx-auto h-full object-contain z-0"
        />
      </div>
    </div>
  </section>
);

export default DEX;