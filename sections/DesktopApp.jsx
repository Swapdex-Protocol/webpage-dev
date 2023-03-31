'use client';

import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';

const DesktopApp = () => (
  <section id="wallet" className={`flex flex-col bg-SDX-900 ${styles.xPaddings} ${styles.yPaddings} tablet-s:-mt-56 overflow-hidden`}>

    <div className={`flex flex-col mx-auto z-10 ${styles.innerWidth}`}>
      <p className="font-semibold text-[18px] leading-[24px] text-SDX-Pink laptop-s:w-5/12">DESKTOP APP</p>
      <p className="font-bold text-[40px] leading-[45px] mobile-m:text-[50px] mobile-m:leading-[60px] tablet-s:text-[60px] tablet-s:leading-[70px] text-SDX-200 mobile-s:w-full">Get started fast</p>
      <p className="font-light text-[18px] leading-[24px] text-SDX-200 laptop-l:w-5/12">Download the desktop wallet to access the network</p>
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
            logo="/microsoft-5.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
            logoClasses="w-[26px] h-[26px]"
            supportText="MICROSOFT STORE"
            mainText="Available Soon"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
          <div className="w-full h-[1px] tablet-s:w-[1px] tablet-s:h-full bg-SDX-LightPink rounded-full" />
          <MobileDownloadButton
            link="https://drive.google.com/drive/folders/1bRmKrm06RsmdSM-721XbJzA2D5U3Ssmp?usp=sharing"
            logo="/swapdex-logo-gray.svg"
            className="border border-SDX-Pink inline-flex bg-SDX-Pink pink-button my-auto py-4 px-6 gap-2 w-full items-center justify-center"
            logoClasses="w-[26px] h-[26px]"
            supportText="DOWNLOAD TODAY"
            mainText="Beta Version"
            mainTextClasses="text-SDX-200 my-auto"
            supportTextClasses="text-SDX-200 my-auto"
          />
        </div>
      </div>
    </div>

  </section>
);

export default DesktopApp;
