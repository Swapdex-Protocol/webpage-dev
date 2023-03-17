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
          <Link href="https://docs.swapdex.network/home/tokenomics/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Coin Economics</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Whitepaper</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Documentation</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://swapdex.network/blog/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Blog</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Developers</h1>
          <Link href="https://docs.swapdex.network/dev-guides/sdx-academy/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">SDX Academy</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/dev-guides/chain-docs/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Chain Documentation</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/dev-guides/nft-docs/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFT Documentation</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/dev-guides/bug-bounty/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Bug Bounty</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Web3 Projects</h1>
          <Link href="https://docs.swapdex.network/web3-projects/dex-listing/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">DEX Listing</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/nft-creators/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFT Creators</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/migration-guide/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Migrate to SwapDEX</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/partnerships/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Partnerships</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Small Print</h1>
          <Link href="https://google.com" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Terms of use</p>
              <div className="h-[1px] rounded-full bg-[#fbf8cc] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://google.com" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Privacy Policy</p>
              <div className="h-[1px] rounded-full bg-[#fbf8cc] align-bottom nav-underline" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
