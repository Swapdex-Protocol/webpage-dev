'use client';

import styles from '../styles';
import Button from '../components/Button';

const DesktopApp = () => (
  <section className={`bg-SDX-900 ${styles.xPaddings} ${styles.yPaddings} h-screen flex flex-col`}>
    <div className={`flex flex-col mx-auto ${styles.innerWidth}`}>
      <span className="font-semibold text-[18px] leading-[24px] text-SDX-Pink w-5/12">DESKTOP APP</span>
      <span className="font-bold text-[60px] leading-[70px] text-SDX-200 w-5/12">Get started fast</span>
      <span className="font-light text-[18px] leading-[24px] text-SDX-200 w-5/12">Download the desktop wallet to access the ecosystem</span>
    </div>
    <div className={`relative mx-auto ${styles.innerWidth}`}>
      <div className="absolute flex w-[1024px] z-0 top-4 translate-x-[500px]">
        <img
          src="/hero_ball_01_2.png"
          alt="swapdex-logo"
          className="w-full object-contain mx-auto rounded-[12px] image_blur_12px"
        />
      </div>
      <div className={`absolute flex flex-col mx-auto ${styles.innerWidth} pt-10 z-10 top-0`}>
        <div className="w-full rounded-[17px] px-[20px] pb-[20px] glassmorphism">
          <div className="flex flex-row gap-1 py-2">
            <div className="w-[12px] h-[12px] rounded-full bg-SDX-Pink" />
            <div className="w-[12px] h-[12px] rounded-full bg-amber-400" />
            <div className="w-[12px] h-[12px] rounded-full bg-lime-400" />
          </div>
          <img
            src="/desktop_app.png"
            alt="desktop showcase"
            className="w-full object-contain mx-auto rounded-[12px]"
          />
        </div>
        <div className={`flex flex-row mt-5 gap-8 mx-auto ${styles.innerWidth} justify-center items-center z-20`}>
          <Button
            link="https://www.google.com/"
            image="/Apple_logo_pink.svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2"
            imageClasses="w-[26px] h-[26px]"
            textClasses="text-SDX-200 my-auto"
          >
            Download
          </Button>
          <Button
            link="https://discord.gg/hBsxnNZgnX"
            image="/Windows_logo_-_2021_(Pink).svg"
            className="border border-SDX-Pink inline-flex pink-ghost-button my-auto py-4 px-6 gap-2"
            imageClasses="w-[26px]"
            textClasses="text-SDX-200 my-auto"
            target="_blank"
          >
            Download
          </Button>
        </div>
      </div>
    </div>

  </section>
);

export default DesktopApp;
