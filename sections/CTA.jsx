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

const CTA = () => {
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <section id="CTA" className={`relative flex flex-col')] ${styles.yPaddings} ${styles.xPaddings} w-full overflow-hidden bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: "url('/CTA_render_01_done.jpg')" }}>
      <div className={`${styles.innerWidth} mt-16 mx-auto z-10`}>
        <div className="w-full mobile-s:mt-10 laptop-s:my-28">
          <h1 className="font-bold text-[40px] leading-[48px] text-SDX-900 text-center mx-auto">Download now</h1>
          <p className="font-light text-[18px] leading-6 text-SDX-900 text-center max-w-md mx-auto mt-8">
            And gain access to a community-run blockchain, cross-chain limit-order DEX and NFT marketplace
          </p>
        </div>
        <div className="flex mt-8 mb-12">
          <div className="sm:mx-auto w-full flex flex-col sm:flex-row gap-4 tablet-s:justify-center">
            <MobileDownloadButton
              link="https://app.swapdex.network/swapdex/"
              target="_blank"
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="Launch in your browser"
              mainText="Web Dashboard"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            />
            <ModalButton
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="DOWNLOAD TODAY"
              mainText="Desktop Wallet"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
              handleClick={() => setDownloadModal(true)}
            />
            {/* <MobileDownloadButton
              link="https://www.apple.com/"
              logo="/Apple_logo_black.svg"
              className="border border-SDX-Pink ghost-button my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="Download on the"
              mainText="App Store"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            />
            <MobileDownloadButton
              link="https://www.google.com/"
              logo="/Google_Play_2022_icon.svg"
              className="border border-SDX-Pink ghost-button my-auto py-4 px-6 gap-2 justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="GET IT ON"
              mainText="Google Play"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            /> */}
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-medium text-[18px] leading-6 text-SDX-900">Track us here</p>
        </div>
        <div className="grid mobile-s:grid-col-4 tablet-s:grid-cols-12 items-center justify-center tablet-s:mb-10">
          <Link href="https://www.coingecko.com/en/coins/swapdex" target="_blank" className=" mobile-s:col-start-2 mobile-s:col-end-3 tablet-s:col-start-6 tablet-s:col-end-7 mx-auto">
            <Image src="./Gecko.svg" alt="coingecko logo" width={100} height={100} className="object-contain w-20 mobile-s:p-3 laptop-s:p-4" />
          </Link>
          <Link href="https://coinmarketcap.com/currencies/swapdex/" target="_blank" className="mobile-s:col-start-3 mobile-s:col-end-4 tablet-s:col-start-7 tablet-s:col-end-8 mx-auto">
            <Image src="./CoinMarketCap.svg" alt="coin market cap logo" width={100} height={100} className="object-contain w-20" />
          </Link>
        </div>
      </div>
      <div className=" backdrop-blur-md w-full h-full absolute top-0 left-0" />

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
export default CTA;
