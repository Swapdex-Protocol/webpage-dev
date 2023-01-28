'use client';

import styles from '../styles';

const DEX = () => (
  <section id="dex" className={`bg-white h-screen ${styles.yPaddings}`}>
    <div className="relative flex flex-col w-full h-full">
      <div className={`static w-full h-full ${styles.innerWidth} mx-auto z-10`}>
        <div className="flex flex-col w-full">
          <div className="w-full">
            <p className="font-semibold text-[18px] leading-[24px] text-SDX-Pink">LIMIT-ORDER DEX</p>
            <h1 className="font-bold text-[40px] leading-[48px] text-SDX-900">Trade on the most decentralised limit-order DEX, where power belongs to the people</h1>
            <p className="font-medium text-[18px] leading-[24px] text-SDX-900">Unlock the true power of decentralisation</p>
          </div>
        </div>
        <div className="static flex w-full rounded-[17px] mt-5 glassmorphism-light px-5 pt-5">
          <div className="flex flex-col bg-white w-full rounded-[12px]">
            <div className="flex flex-row ml-3 gap-2 my-2">
              <div className="h-3 w-3 rounded-full bg-SDX-Pink" />
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <img src="/DEX-Showcase_03.png" />
          </div>
        </div>
        <div className="relative flex flex-row justify-between mx-auto mt-10">
          <p className="font-medium text-[18px] leading-[24px] text-SDX-900 w-48 my-auto">Connected to powerful networks</p>
          <img src="/polygon-matic-logo.svg" className="h-12 my-auto translate-bump" />
          <img src="/swapdex-logo-icon.svg" className="h-12 my-auto translate-bump" />
          <img src="/bnb-bnb-logo.svg" className="h-12 my-auto translate-bump" />
          <img src="/Kusari_Logo.svg" className="h-12 my-auto translate-bump" />
          <img src="/ethereum-eth-logo.svg" className="h-12 my-auto translate-bump" />
          <img src="/solana-sol-logo.svg" className="h-12 my-auto translate-bump" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0 z-0">
        <img
          src="/DEX_bg.png"
          alt="swapdex DeFi"
          className="mx-auto h-full object-contain z-0"
        />
      </div>
    </div>
  </section>
);

export default DEX;
