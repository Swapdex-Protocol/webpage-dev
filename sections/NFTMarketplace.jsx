'use client';

import Link from 'next/link';
import styles from '../styles';
import NFTCard from '../components/NFTCard';

const NFTMarketplace = () => (
  <section id="NFTMarketplace" className={`${styles.yPaddings} ${styles.xPaddings} w-full bg-SDX-900`}>
    <div className="flex flex-col h-full w-full">
      <div className={`flex flex-col ${styles.innerWidth} mx-auto`}>
        <p className="font-semibold text-[18px] leading-6 text-right sm:text-center text-SDX-Pink">NFT MARKETPLACE</p>
        <h1 className="font-bold text-[30px] leading-[35px] mobile-m:text-[40px] mobile-m:leading-[48px] text-SDX-200 text-right sm:text-center my-2">Discover rare NFT collections on our cross-chain NFT marketplace</h1>
        <p className="font-light text-[18px] leading-6 text-right sm:text-center text-SDX-200">Buy, sell, auction and create NFTs today!</p>
      </div>
      <div className={`grid grid-row-1 laptop-s:grid-cols-2 ${styles.innerWidth} mx-auto mt-10`}>
        <div className="relative">
          <div className="absolute top-0 sm:top-10 left-0 bottom-0">
            <img src="/hero_ball_01_2.png" className="blur-md z-0 laptop-s:-translate-x-24" />
          </div>
          <NFTCard />
        </div>
        <div className="flex flex-col overflow-hidden laptop-s:overflow-visible sm:w-full h-full">
          <div className="relative ">
            <div className="absolute top-16 sm:top-0 left-0 right-0 bottom-0 z-0 m-5">
              <img src="/hero_ball_02_1.png" className="blur-xl z-0" />
            </div>
            <div className="flex flex-row justify-center laptop-s:justify-end gap-5 z-10 mt-5">
              <div className="flex flex-col z-10">
                <p className="font-bold text-[32px] leading-10 text-SDX-200">1000+</p>
                <p className="font-regular text-[18px] leading-6 text-SDX-200">Artworks</p>
              </div>
              <div className="flex flex-col z-10">
                <p className="font-bold text-[32px] leading-10 text-SDX-200">50+</p>
                <p className="font-regular text-[18px] leading-6 text-SDX-200">Collections</p>
              </div>
            </div>
            <div className="flex sm:w-full w-[800px] min-h-[200px] rounded-[17px] mt-10 glassmorphism px-2 pt-2 z-10">
              <div className="flex flex-col bg-SDX-900 w-full rounded-[12px]">
                <div className="flex flex-row ml-3 gap-2 my-2">
                  <div className="h-3 w-3 rounded-full bg-SDX-Pink" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <img src="/NFT-marketplace-showcase.svg" />
              </div>
            </div>

            <div className="grid mobile-s:grid-cols-1 tablet-s:grid-cols-2 gap-3 laptop-l:flex laptop-l:flex-row laptop-l:justify-between mt-10">
              <Link href="https://www.coingecko.com/en/coins/swapdex" target="_blank" className="z-10">
                <img src="/coingecko-seeklogo-gray.svg" className="tablet-s:mx-auto" />
              </Link>
              <Link href="https://coinmarketcap.com/currencies/swapdex-sdxb/" target="_blank" className="z-10">
                <img src="/coinmarketcap-logo-gray.svg" className="tablet-s:mr-0" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 laptop-s:flex laptop-s:flex-row laptop-s:justify-between mt-4">
              <img src="/polygon-matic-logo-gray.svg" className="h-[50px] object-contain z-10 tablet-s:mx-auto" />
              <img src="/bnb-bnb-logo-gray.svg" className="h-[50px] object-contain z-10 mx-auto" />
              <img src="/swapdex-logo-gray.svg" className="h-[50px] object-contain z-10 mobile-s:ml-auto tablet-s:mx-auto" />
              <img src="/eth-logo-gray.svg" className="h-[50px] object-contain z-10 tablet-s:mx-auto" />
              <img src="/solana-sol-logo-gray.svg" className="h-[50px] object-contain z-10 mx-auto" />
              <img src="/Kusari_Logo_gray.svg" className="h-[50px] object-contain z-10 mobile-s:ml-auto tablet-s:mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NFTMarketplace;
