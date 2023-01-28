'use client';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';

const MobileApp = () => (
  <section className={`bg-SDX-900 h-screen ${styles.yPaddings} ${styles.innerWidth} mx-auto mt-12`}>
    <div className="h-full">

      <div className="flex flex-col w-full mx-auto">
        <span className="font-semibold text-[18px] leading-[24px] text-SDX-Pink text-right">MOBILE APP</span>
        <h1 className="font-bold text-[60px] leading-[70px] text-SDX-200 text-right">Stay flexible, stay mobile</h1>
        <span className="font-light text-[18px] leading-[24px] text-SDX-200 text-right">Access the ecosystem everywhere you go</span>
      </div>

      <div className="grid grid-cols-3 w-full">
        <img
          src="/Mobile_Wallet_Showcase.png"
          alt="swapdex DeFi"
          className="mx-auto my-auto object-contain col-span-2 -translate-x-48"
        />

        <div className="flex flex-col gap-4 mx-auto my-auto col-span-1">
          <MobileDownloadButton
            link="https://www.apple.com/"
            logo="/Apple_logo_pink.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full"
            logoClasses="w-[26px] h-[26px]"
            supportText="Download on the"
            mainText="App Store"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
          <MobileDownloadButton
            link="https://www.google.com/"
            logo="/Google_Play_2022_icon.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2"
            logoClasses="w-[26px] h-[26px]"
            supportText="GET IT ON"
            mainText="Google Play"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
        </div>
      </div>
    </div>

  </section>
);

export default MobileApp;
