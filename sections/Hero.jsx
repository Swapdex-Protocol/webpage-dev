'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant, fadeInVariant } from '../utils/motion';
// import Button from '../components/Button';
import { LiveDataCard, DownloadModal, ModalButton, MobileDownloadButton } from '../components';

const DownloadBodyCmp = () => (
  <div className="p-5 laptop-s:px-10 mobile-s:px-5 border-t-2 border-b-2 border-gray-200">
    <h2 className="text-lg leading-7 font-semibold">Choose your Operating System</h2>
    <div className="flex laptop-s:flex-row justify-between laptop-s:gap-5 mobile-s:gap-2 mt-3">
      <Link href="https://github.com/Swapdex-Protocol/Dashboard/releases/download/0.0.195/SwapDEX-Dashboard-Setup-0.0.195.exe" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60 ring-2 ring-white ring-inset rounded-xl">
            <Image
              src="/windows-black.svg"
              alt="Windows Logo"
              width={40}
              height={40}
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Windows</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <i className="fa-solid fa-cloud-arrow-down text-sm text-SDX-400" />
          </div>
        </div>
      </Link>

      <Link href="https://github.com/Swapdex-Protocol/Dashboard/releases/download/0.0.195/SwapDEX-Dashboard-0.0.195.dmg" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <Image
              src="/apple.svg"
              alt="apple logo"
              width={40}
              height={40}
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Mac (Intel)</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <i className="fa-solid fa-cloud-arrow-down text-sm text-SDX-400" />
          </div>
        </div>
      </Link>

      <Link href="https://github.com/Swapdex-Protocol/Dashboard/releases/download/0.0.195/SwapDEX-Dashboard-0.0.195-arm64.dmg" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <Image
              src="/apple.svg"
              alt="apple logo"
              width={40}
              height={40}
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Mac (Silicon)</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <i className="fa-solid fa-cloud-arrow-down text-sm text-SDX-400" />
          </div>
        </div>
      </Link>

    </div>

    <div className="grid grid-cols-3 content-start laptop-s:flex-row justify-between laptop-s:gap-5 mobile-s:gap-2 mt-3">
      <Link href="https://github.com/Swapdex-Protocol/Dashboard/releases/download/0.0.195/SwapDEX-Dashboard-0.0.195.AppImage" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <Image
              src="/linux.svg"
              alt="Linux logo"
              width={40}
              height={40}
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Linux (Intel)</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <i className="fa-solid fa-cloud-arrow-down text-sm text-SDX-400" />
          </div>
        </div>
      </Link>

      <Link href="https://github.com/Swapdex-Protocol/Dashboard/releases/download/0.0.195/SwapDEX-Dashboard-0.0.195-arm64.AppImage" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <Image
              src="/linux.svg"
              alt="Linux logo"
              width={40}
              height={40}
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Linux (ARM)</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <i className="fa-solid fa-cloud-arrow-down text-sm text-SDX-400" />
          </div>
        </div>
      </Link>
    </div>

    <h2 className="hidden laptop-s:flex text-lg leading-7 font-semibold mt-8">Available Soon</h2>
    <div className="hidden laptop-s:flex tablet-s:flex-row mobile-s:flex-col justify-between tablet-s:gap-5 mobile-s:gap-1 mt-3">

      <div className="flexCenter text-center flex-col py-5 bg-white/80 border-2 border-gray-200 w-full rounded-xl">
        <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
          <Image
            src="/logo-40x40.png"
            alt="Windows Store Logo"
            width={40}
            height={40}
            className="w-10"
          />
        </div>
        <span className="mt-2 text-sm font-bold">Windows Store</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">apps.microsoft.com</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-sm text-SDX-400" />
        </div>
      </div>

      <div className="flexCenter text-center flex-col py-5 bg-white/80 border-2 border-gray-200 w-full rounded-xl">
        <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
          <Image
            src="/app-store-ios.svg"
            alt="app store logo"
            width={40}
            height={40}
            className="w-10"
          />
        </div>
        <span className="mt-2 text-sm font-bold">App Store</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">apple.com/app-store</span>
          <i className="fa-solid fa-arrow-up-right-from-square text-sm text-SDX-400" />
        </div>
      </div>

      <div className="flexCenter text-center flex-col py-5 w-full" />

    </div>
  </div>
);

const Hero = () => {
  const [animateValue, setAnimateValue] = useState({ y: 0, opacity: 1 });
  const [downloadModal, setDownloadModal] = useState(false);
  // const [yTranslate, setYTranslate] = useState((window.innerHeight * -1) / 9);

  useEffect(() => {
    if (window.innerHeight > 740) {
      setAnimateValue({ y: 0, opacity: 1 });
    } else {
      setAnimateValue({ y: 0, opacity: 1 });
    }
  }, []);

  return (
    <section className="relative laptop-s:top-5 top-10 z-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col relative z-10 px-4 gap-6 tablet-s:gap-16 tablet-s:justify-center tablet-s:items-center tablet-s:pt-[70px]">

          <motion.div variants={textVariant(1.0)} className="font-semibold text-[18px] leading-[24px] text-SDX-200 text-start tablet-s:text-center z-10">
            TRULY DECENTRALISED WEB3 BLOCKCHAIN
          </motion.div>
          <motion.h1 variants={textVariant(1.1)} className="font-bold text-[50px] tablet-s:text-[60px] leading-[60px] tablet-s:leading-[70px] text-white text-start tablet-s:text-center">
            Robust for <span className="">Developers</span>.<br />
            <span>Fast for <span className="">Traders</span>.</span>
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className="font-light text-[16px] tablet-s:text-[18px] leading-[20px] tablet-s:leading-6 text-SDX-200 text-start tablet-s:text-center tablet-s:w-[570px]">
            The SwapDEX Network is Powering Web3, NFT, and Decentralised Finance Applications While Connecting Major Blockchains With Fast, Secure and Near-Zero Fees.
          </motion.div>
          <motion.div variants={textVariant(1.3)}>
            <div className="flex flex-col tablet-s:flex-row gap-3 my-8">
              <MobileDownloadButton
                link="https://app.swapdex.network/swapdex/"
                target="_blank"
                logo="/swapdex-logo-icon.svg"
                className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
                supportText="LAUNCH IN YOUR BROWSER"
                mainText="Web Dashboard"
                mainTextClasses="text-SDX-200 my-auto"
                supportTextClasses="text-SDX-200 my-auto"
              />
              <ModalButton
                logo="/swapdex-logo-gray.svg"
                className="border border-SDX-Pink inline-flex bg-SDX-Pink pink-button my-auto py-4 px-6 gap-2 items-center justify-center"
                logoClasses="w-[26px] h-[26px]"
                supportText="DOWNLOAD TODAY"
                mainText="SwapDEX Wallet"
                mainTextClasses="text-SDX-200 my-auto"
                supportTextClasses="text-SDX-200 my-auto"
                handleClick={() => setDownloadModal(true)}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="z-0 laptop-s:w-full laptop-s:-translate-x-0 laptop-s:scale-110 2xl:items-center 2xl:laptop-s:-translate-x-0 2xl:justify-center 2xl:-top-16 2xl:scale-120 laptop-s:mt-28 tablet-s:w-[1500px] tablet-s:-translate-x-[350px] mobile-s:w-[1150px] mobile-s:-translate-x-[350px] flex absolute mobile-s:top-0 right-0 left-0 bg-SDX-900 opacity-95">
        <motion.div variants={fadeInVariant} initial="initial" animate="animate" className="mx-auto inline-flex w-full">
          <Image
            src="/hero_BG.webp"
            alt="SwapDex Hero Background"
            width={1600}
            height={900}
            className=" -translate-y-16 object-contain laptop-s:scale-100 scale-90"
          />
        </motion.div>
      </div>

      <motion.div className="mt-12 z-20 mobile-l:mt-28" initial={{ y: 0, opacity: 0 }} animate={animateValue} transition={{ delay: 1.6, duration: 1, type: 'spring' }}>
        <LiveDataCard />
      </motion.div>
      {downloadModal
      && (
        <DownloadModal
          isOpen={downloadModal}
          header="Choose your Operating System"
          subheader="Microsoft Store and Apple Store downloads will be available soon"
          body={<DownloadBodyCmp />}
          handleClose={() => setDownloadModal(false)}
          footer={(
            <div className="flex flex-row px-5 justify-end py-2">
              <div className="bg-SDX-Pink rounded-md cursor-pointer py-1" onClick={() => setDownloadModal(false)}>
                <span className="text-white px-4">Close</span>
              </div>
            </div>
        )}
        />
      )}
    </section>
  );
};

export default Hero;
