'use client';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';

const CTA = () => (
  <section className={`flex flex-col bg-white ${styles.yPaddings} ${styles.xPaddings} w-full`}>
    <div className={`${styles.innerWidth} mx-auto`}>
      <img
        src="/circle-chevron-down-solid.svg"
        className="object-contain mx-auto"
      />
      <div className="w-full mt-28">
        <h1 className="font-bold text-[40px] leading-[48px] text-SDX-900 text-center mx-auto">Download now</h1>
        <p className="font-light text-[18px] leading-6 text-SDX-900 text-center max-w-md mx-auto mt-8">
          And gain access to a community-run blockchain, cross-chain limit-order DEX and NFT marketplace
        </p>
      </div>
      <div className="flex mt-8 sm:mb-28">
        <div className="sm:mx-auto w-full flex flex-col sm:flex-row gap-4 tablet-s:justify-center">
          <MobileDownloadButton
            link="https://www.apple.com/"
            logo="/swapdex-logo-icon.svg"
            className="border border-SDX-Pink ghost-button my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
            logoClasses="w-[26px] h-[26px]"
            supportText="Launch in your browser"
            mainText="Launch App"
            mainTextClasses="text-SDX-900 my-auto"
            supportTextClasses="text-SDX-900 my-auto"
          />
          <MobileDownloadButton
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
          />
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
