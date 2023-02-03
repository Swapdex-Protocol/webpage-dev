'use client';

import Link from 'next/link';
import styles from '../styles';

const Footer = () => (
  <div className={`${styles.yPaddings} ${styles.xPaddings} ${styles.innerWidth} mx-auto`}>
    <div className="flex flex-col">
      <div className="flex w-full">
        <div className="flex flex-col sm:flex-row w-full justify-between">
          <div className="grid grid-cols-8 sm:flex sm:flex-row gap-2">
            <img src="/swapdex-logo-icon.svg" className="object-contain h-8 col-span-1" />
            <p className="font-bold text-[24px] leading-8 text-SDX-200 col-span-7">SwapDEX</p>
            <p className="font-medium text-[16px] leading-5 text-SDX-400 my-auto col-span-8"> - Join the censor-free network</p>
          </div>
          <div className="flex flex-row mt-8 sm:mt-1 justify-between sm:gap-4 my-auto">
            <Link href="https://www.youtube.com/@swapdexnetwork4531?sub_confirmation=1" target="_blank">
              <img src="/youtube-gray.svg" className="h-6 sm:h-5 translate-bump" />
            </Link>
            <Link href="https://discord.gg/hBsxnNZgnX" target="_blank">
              <img src="/discord-gray.svg" className="h-6 sm:h-5 translate-bump" />
            </Link>
            <Link href="https://t.me/officialswapdexgroup" target="_blank">
              <img src="/telegram-gray.svg" className="h-6 sm:h-5 translate-bump" />
            </Link>
            <Link href="https://twitter.com/swapdexo" target="_blank">
              <img src="/square-twitter-gray.svg" className="h-6 sm:h-5 translate-bump" />
            </Link>
            <Link href="https://uk.linkedin.com/in/swapdex-defi-blockchain-978921224" target="_blank">
              <img src="/linkedin-gray.svg" className="h-6 sm:h-5 translate-bump" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 sm:flex sm:flex-row w-full sm:justify-between mt-8 sm:mt-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Learn more</h1>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Tokenomics</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Whitepaper</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Documentation </p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Blog</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Developers</h1>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">SDX Academy</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Chian Documentation</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">NFT Documentation </p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Bug Bounty</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Web3 Projects</h1>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">DEX Listing</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">NFT Creators</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Migration Guide</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Partnerships</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Small Print</h1>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Terms of use</p>
          </Link>
          <Link href="https://google.com" target="_blank">
            <p className="font-light text-[12px] leading-4 text-SDX-200 link-fill-pink">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
