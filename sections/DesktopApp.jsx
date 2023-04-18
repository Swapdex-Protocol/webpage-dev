'use client';

import { useState } from 'react';
import Link from 'next/link';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';
import { DownloadModal, ModalButton } from '../components';

const DownloadBodyCmp = () => (
  <div className="p-5 laptop-s:px-10 mobile-s:px-5 border-t-2 border-b-2 border-gray-200">
    <h2 className="text-lg leading-7 font-semibold">Stable Beta Builds</h2>
    <div className="flex laptop-s:flex-row justify-between laptop-s:gap-5 mobile-s:gap-2 mt-3">
      <Link href="https://drive.google.com/uc?id=1jQBVeC1OC3QdhDB6q9MNmkIny6Ih4t0-&export=download" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60 ring-2 ring-white ring-inset rounded-xl">
            <img
              src="/windows-black.svg"
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Windows</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <img
              src="/cloud-download-gray.svg"
              className="h-3"
            />
          </div>
        </div>
      </Link>

      <Link href="https://drive.google.com/uc?id=198juIu6U1YOV0FDN9UBa6atSqSB942Tz&export=download" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <img
              src="/apple.svg"
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Mac</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <img
              src="/cloud-download-gray.svg"
              className="h-3"
            />
          </div>
        </div>
      </Link>

      <Link href="https://drive.google.com/uc?id=1VNhZ511F0UtY1EWmElhezsGcR_u0rT0r&export=download" target="_blank" className="w-full">
        <div className="flexCenter text-center flex-col laptop-s:py-5 mobile-s:py-2 bg-white/80 border-2 border-gray-200 hover:border-SDX-Pink hover:bg-white w-full rounded-xl cursor-pointer transition-all duration-300 ease-in-out">
          <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
            <img
              src="/linux.svg"
              className="w-10"
            />
          </div>
          <span className="mt-2 text-sm font-bold">Linux</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">Download</span>
            <img
              src="/cloud-download-gray.svg"
              className="h-3"
            />
          </div>
        </div>
      </Link>
    </div>

    <h2 className="hidden laptop-s:flex text-lg leading-7 font-semibold mt-8">Available Soon</h2>
    <div className="hidden laptop-s:flex tablet-s:flex-row mobile-s:flex-col justify-between tablet-s:gap-5 mobile-s:gap-1 mt-3">

      <div className="flexCenter text-center flex-col py-5 bg-white/80 border-2 border-gray-200 w-full rounded-xl">
        <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
          <img
            src="/logo-40x40.png"
            className="w-10"
          />
        </div>
        <span className="mt-2 text-sm font-bold">Windows Store</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">apps.microsoft.com</span>
          <img
            src="/link-SDX-400.svg"
            className="h-3"
          />
        </div>
      </div>

      <div className="flexCenter text-center flex-col py-5 bg-white/80 border-2 border-gray-200 w-full rounded-xl">
        <div className="p-2 border-2 border-gray-200 bg-white bg-gradient-to-t from-SDX-LightPink/40 via-violet-200/60 to-blue-200/60  ring-2 ring-white ring-inset rounded-xl">
          <img
            src="/app-store-ios.svg"
            className="w-10"
          />
        </div>
        <span className="mt-2 text-sm font-bold">App Store</span>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-light laptop-s:text-xs mobile-s:text-[8px] mobile-m:text-[10px] inline-block align-baseline text-SDX-400">www.apple.com/app-store</span>
          <img
            src="/link-SDX-400.svg"
            className="h-3"
          />
        </div>
      </div>

      <div className="flexCenter text-center flex-col py-5 w-full" />

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
          <img
            src="/SDX_iridescent2_sideView.png"
            alt="swapdex-logo"
            className="mobile-s:w-full object-contain mx-auto z-10 max-h-96"
          />
        </div>
        <div className="absolute h-[500px] w-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blob z-0" />
        <div className={`sm:absolute tablet-s:relative flex flex-col mx-auto ${styles.innerWidth} z-10 mt-5`}>
          <div className="mobile-s:w-[800px] tablet-s:w-full rounded-[17px] px-[20px] pb-[20px] glassmorphism mobile-s:min-h-[200px]">
            <div className="flex flex-row gap-1 py-2">
              <div className="w-[12px] h-[12px] rounded-full bg-SDX-Pink" />
              <div className="w-[12px] h-[12px] rounded-full bg-amber-400" />
              <div className="w-[12px] h-[12px] rounded-full bg-lime-400" />
            </div>
            <img
              src="/desktop_app.png"
              alt="desktop showcase"
              className="w-full mx-auto rounded-[12px] mobile-s:min-h-[400px] tablet-s:h-auto"
            />
          </div>
          <div className={`sm:absolute tablet-s:relative flex flex-col w-full sm:flex-row mt-5 laptop-s:mt-10 gap-3 sm:gap-8 mx-auto ${styles.innerWidth} sm:justify-center sm:items-center z-20`}>
            <MobileDownloadButton
              link="#mobile_app"
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
              logoClasses="w-[26px] h-[26px]"
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

export default DesktopApp;
