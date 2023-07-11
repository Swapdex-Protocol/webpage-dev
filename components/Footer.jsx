'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';

const Footer = () => (
  <div className={`${styles.yPaddings} ${styles.xPaddings} ${styles.innerWidth} mx-auto`}>
    <div className="flex flex-col">
      <div className="flex w-full">
        <div className="flex flex-col sm:flex-row w-full justify-between">
          <div className="grid grid-cols-8 sm:flex sm:flex-row gap-2">
            <Image src="/swapdex-light.png" alt="swapdex logo" width={1600} height={900} className="object-contain w-[188px] col-span-8 laptop-s:col-span-1" />
            <p className="font-medium text-[16px] leading-5 text-SDX-200 my-auto col-span-8"> - Join the censor-free network</p>
          </div>
          <div className="flex flex-row mt-8 sm:mt-1 justify-between sm:gap-4 my-auto items-center">
            <Link href="https://www.youtube.com/@swapdexnetwork4531?sub_confirmation=1" target="_blank">
              <i className="fa-brands fa-youtube text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
            <Link href="https://discord.gg/hBsxnNZgnX" target="_blank">
              <i className="fa-brands fa-discord text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
            <Link href="https://t.me/officialswapdexgroup" target="_blank">
              <i className="fa-brands fa-telegram text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
            <Link href="https://twitter.com/swapdexo" target="_blank">
              <i className="fa-brands fa-square-twitter text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
            <Link href="https://uk.linkedin.com/in/swapdex-defi-blockchain-978921224" target="_blank">
              <i className="fa-brands fa-linkedin text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
            <Link href="https://github.com/Swapdex-Protocol" target="_blank">
              <i className="fa-brands fa-square-github text-2xl text-SDX-200 hover:text-SDX-Pink transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 sm:flex sm:flex-row w-full sm:justify-between mt-8 sm:mt-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">New to SwapDEX?</h1>
          <Link href="https://drive.google.com/uc?export=download&id=1Pu_2LA6ExWKnpXiho0Adsxg4SdanR3tO" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Whitepaper</p>
              <div className="h-[1px] rounded-full bg-SDX-Pink align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="/" target="">
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
          <Link href="https://drive.google.com/file/d/1Pu_2LA6ExWKnpXiho0Adsxg4SdanR3tO/view?usp=sharing" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Coin Economics</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="/" target="https://drive.google.com/uc?export=download&id=1Pu_2LA6ExWKnpXiho0Adsxg4SdanR3tO">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Roadmap</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/what-to-try/nominator/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Staking</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="https://docs.swapdex.network/validator-guides/validator/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Run a Validator</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
          <Link href="/" target="https://drive.google.com/uc?export=download&id=1Pu_2LA6ExWKnpXiho0Adsxg4SdanR3tO">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFT-based LP-Farming</p>
              <div className="h-[1px] rounded-full bg-[#8eecf5] align-bottom nav-underline" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Developers</h1>
          <Link href="/" target="">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Core Concepts</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/Tutorials/evm-tutorial/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">EVM Tutorial</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/nft-docs/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">NFTs</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>

          <Link href="https://docs.swapdex.network/dev-guides/" target="_blank">
            <div className="inline-block reveal-div min-w-0">
              <p className="font-light text-[12px] leading-4 text-SDX-200">Smart Contracts</p>
              <div className="h-[1px] rounded-full bg-[#b9fbc0] align-bottom nav-underline" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-[16px] leading-5 sm:text-[14px] sm:leading-4 text-SDX-200">Branding</h1>
          <Link href="https://drive.google.com/drive/folders/1tU5KNmZhKnFZTfyzAzQujgZs44hetoTg?usp=sharing" target="_blank">
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
