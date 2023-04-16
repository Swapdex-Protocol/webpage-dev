'use client';

import Link from 'next/link';
import styles from '../styles';

const Footer = () => (
  <div className={`${styles.yPaddings} ${styles.xPaddings} ${styles.innerWidth} mx-auto`}>
    <div className="flex flex-col">
      <div className="flex w-full">
        <div className="flex flex-col sm:flex-row w-full justify-between">
          <div className="grid grid-cols-8 sm:flex sm:flex-row gap-2">
            <img src="/swapdex-light.png" className="object-contain w-[188px] col-span-8 laptop-s:col-span-1" />
            <p className="font-medium text-[16px] leading-5 text-SDX-200 my-auto col-span-8"> - Join the censor-free network</p>
          </div>
          <div className="flex flex-row mt-8 sm:mt-1 justify-between sm:gap-4 my-auto">
            <Link href="https://www.youtube.com/@swapdexnetwork4531?sub_confirmation=1" target="_blank">
              <img src="/youtube-gray.svg" className="h-6 sm:h-5" />
            </Link>
            <Link href="https://discord.gg/hBsxnNZgnX" target="_blank">
              <img src="/discord-gray.svg" className="h-6 sm:h-5" />
            </Link>
            <Link href="https://t.me/officialswapdexgroup" target="_blank">
              <img src="/telegram-gray.svg" className="h-6 sm:h-5" />
            </Link>
            <Link href="https://twitter.com/swapdexo" target="_blank">
              <img src="/square-twitter-gray.svg" className="h-6 sm:h-5" />
            </Link>
            <Link href="https://uk.linkedin.com/in/swapdex-defi-blockchain-978921224" target="_blank">
              <img src="/linkedin-gray.svg" className="h-6 sm:h-5 " />
            </Link>
            <Link href="https://github.com/Swapdex-Protocol" target="_blank">
              <img src="/square-github.svg" className="h-6 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 sm:flex sm:flex-row w-full sm:justify-between mt-8 sm:mt-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">New to SwapDEX?</h1>
          <Link href="https://docs.swapdex.network/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Whitepaper</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/home/tokenomics/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">DApp User-Guide</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Project Docs</p>
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
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Holders</h1>
          <Link href="https://docs.swapdex.network/web3-projects/dex-listing/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Coin Economics</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/nft-creators/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Roadmap</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/migration-guide/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Staking</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/partnerships/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Run a Validator</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/web3-projects/partnerships/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFT-based LP-Farming</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Developers</h1>
          <Link href="https://docs.swapdex.network/dev-guides/sdx-academy/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Core Concepts</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/chain-docs/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Local Development</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/nft-docs/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFTs</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/bug-bounty/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Smart Contracts</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Branding</h1>
          <Link href="https://drive.google.com/drive/u/1/folders/1bgNeXs8XqfM7ORmN5V0pHXNjnv_0ArbN" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Media Kit</p>
              <div className="h-[1px] rounded-full bg-[#fbf8cc] align-bottom nav-underline" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
