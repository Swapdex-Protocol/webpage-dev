'use client';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';

const MobileApp = () => (
  <section id="mobile_app" className={`bg-SDX-900 ${styles.xPaddings} ${styles.yPaddings} ${styles.innerWidth} mx-auto`}>
    <div className="h-full">

      <div className="flex flex-col w-full mx-auto">
        <p className="font-semibold text-[18px] leading-[24px] text-SDX-Pink text-right">MOBILE APP</p>
        <h1 className="font-bold text-[40px] leading-[45px] mobile-m:text-[50px] mobile-m:leading-[60px] sm:text-[60px] sm:leading-[70px] text-SDX-200 text-right">Stay flexible, stay mobile</h1>
        <p className="font-light text-[18px] leading-[24px] text-SDX-200 text-right">Access the network everywhere you go</p>
      </div>

      <div className="grid grid-rows-1 sm:grid-cols-3 laptop-s:grid-cols-5 w-full laptop-s:pt-10 overflow-hidden">
        <div className="absolute flex h-[500px] w-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blob -z-0 right-52" />
        <img
          src="/Mobile_Wallet_Showcase.webp"
          alt="swapdex DeFi"
          className="mx-auto scale-125 laptop-s:scale-90 mt-20 mb-20 laptop-s:my-auto object-contain tablet-s:col-span-2 laptop-s:col-span-3 tablet-s:-translate-x-10"
        />
        <div className="flex flex-col w-full gap-4 mx-auto my-auto sm:col-span-1 laptop-s:col-start-4 laptop-s:col-end-5 z-10">
          <MobileDownloadButton
            link=""
            logo="/Apple_logo_gray.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
            logoClasses="w-[26px] h-[26px]"
            supportText="APP STORE"
            mainText="Available Soon"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
          <MobileDownloadButton
            link=""
            logo="/Google_Play_2022_icon.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
            logoClasses="w-[26px] h-[26px]"
            supportText="GOOGLE PLAY"
            mainText="Available Soon"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
        </div>
      </div>
    </div>

  </section>
);

export default MobileApp;
