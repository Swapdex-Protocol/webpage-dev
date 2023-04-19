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
              link=""
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="Launch in your browser"
              mainText="Launch App"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            />
            <ModalButton
              logo="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="DOWNLOAD TODAY"
              mainText="Beta Version"
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
            <img src="./Gecko.svg" className="object-contain w-20 mobile-s:p-3 laptop-s:p-4" />
          </Link>
          <Link href="https://coinmarketcap.com/currencies/swapdex/" target="_blank" className="mobile-s:col-start-3 mobile-s:col-end-4 tablet-s:col-start-7 tablet-s:col-end-8 mx-auto">
            <img src="./CoinMarketCap.svg" className="object-contain w-20" />
          </Link>
        </div>
      </div>
      <div className=" backdrop-blur-md w-full h-full absolute top-0 left-0" />

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
export default CTA;
