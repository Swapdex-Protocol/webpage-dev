'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';
import { DownloadModal, ModalButton } from '../components';

const DownloadBodyCmp = () => (
  <div className="p-5 laptop-s:px-10 mobile-s:px-5 border-t-2 border-b-2 border-gray-200">
    <h2 className="text-lg leading-7 font-semibold">Desktop Wallet</h2>
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

  </div>
);

const DesktopApp = () => {
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <section id="wallet" className={`flex flex-col bg-SDX-900 ${styles.xPaddings} ${styles.yPaddings} tablet-s:-mt-56 overflow-hidden`}>

      <div className={`flex flex-col mx-auto z-10 ${styles.innerWidth}`}>
        <p className="font-semibold text-[18px] leading-[24px] text-SDX-Pink laptop-s:w-5/12">DESKTOP APP</p>
        <p className="font-bold text-[40px] leading-[45px] mobile-m:text-[50px] mobile-m:leading-[60px] tablet-s:text-[60px] tablet-s:leading-[70px] text-SDX-200 mobile-s:w-full">Get started fast</p>
        <p className="font-light text-[18px] leading-[24px] text-SDX-200 laptop-l:w-5/12">Download the desktop wallet to use the blockchain, NFT Marketplace and DEX</p>
      </div>
      <div className={`relative flex sm:mx-auto ${styles.innerWidth} tablet-s:py-24 laptop-s:pt-10`}>
        <div className="absolute flex mobile-s:w-[800px] tablet-s:-mt-10 laptop-l:w-[1024px] z-0 laptop-l:top-4 laptop-l:translate-x-[500px]">
          <div className="w-full">
            <Image
              src="/SDX_iridescent2_sideView.png"
              alt="SwapDEX background iridescent"
              className='object-contain mx-auto z-10 max-h-96"'
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="absolute h-[500px] w-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blob z-0" />
        <div className={`sm:absolute tablet-s:relative flex flex-col mx-auto ${styles.innerWidth} z-10 mt-5`}>
          <div className="mobile-s:w-[800px] tablet-s:w-full rounded-[17px] px-[20px] pb-[20px] glassmorphism mobile-s:min-h-[200px]">
            <div className="flex flex-row gap-1 py-2">
              <div className="w-[12px] h-[12px] rounded-full bg-SDX-Pink" />
              <div className="w-[12px] h-[12px] rounded-full bg-amber-400" />
              <div className="w-[12px] h-[12px] rounded-full bg-lime-400" />
            </div>
            <div className="w-full mx-auto selection:mobile-s:min-h-[400px] tablet-s:h-auto">
              <Image
                src="/desktop_app.png"
                alt="Desktop App"
                className="rounded-[12px]"
                width={1600}
                height={900}
              />
            </div>
          </div>
          <div className={`sm:absolute tablet-s:relative flex flex-col w-full sm:flex-row mt-5 laptop-s:mt-10 gap-3 sm:gap-8 mx-auto ${styles.innerWidth} sm:justify-center sm:items-center z-20`}>
            <MobileDownloadButton
              link="#mobile_app"
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
              supportText="EXPLORE"
              mainText="Mobile Wallet"
              mainTextClasses="text-SDX-200 my-auto"
              supportTextClasses="text-SDX-200 my-auto"
            />
            <ModalButton
              logo="/swapdex-logo-gray.svg"
              className="border border-SDX-Pink inline-flex bg-SDX-Pink pink-button my-auto py-4 px-6 gap-2 items-center justify-center"
              logoClasses="w-[26px] h-[26px]"
              supportText="DOWNLOAD"
              mainText="Desktop Wallet"
              mainTextClasses="text-SDX-200 my-auto"
              supportTextClasses="text-SDX-200 my-auto"
              handleClick={() => setDownloadModal(true)}
            />
          </div>
        </div>
      </div>
      {downloadModal
      && (
        <DownloadModal
          isOpen={downloadModal}
          header="Choose your Operating System"
          subheader="Navigate the SwapDEX Ecosystem with Ease"
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

export default DesktopApp;
