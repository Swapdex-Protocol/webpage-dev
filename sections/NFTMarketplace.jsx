'use client';

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
      <div className={`flex flex-col tablet-s:grid tablet-s:grid-row-1 laptop-s:grid-cols-2 ${styles.innerWidth} mx-auto mt-10`}>
        <div className="relative laptop-l:mb-20">
          <div className="absolute top-0 sm:top-10 left-0 bottom-0">
            <img src="/hero_ball_02_1.webp" className="blur-md z-0 laptop-s:-translate-x-24 laptop-l:translate-x-0 laptop-s:scale-75" />
          </div>
          <NFTCard />
        </div>
        <div className="flex flex-col laptop-s:overflow-visible sm:w-full h-full">
          <div className="relative ">
            <div className="absolute top-16 sm:top-0 left-0 right-0 bottom-0 z-0 m-5">
              <img src="/hero_ball_01_2.webp" className="blur-xl z-0 laptop-l:mt-16" />
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
            <div className="flex tablet-s:w-full w-[800px] min-h-[200px] rounded-[17px] mt-10 glassmorphism px-2 pt-2 z-10">
              <div className="flex flex-col bg-SDX-900 w-full rounded-[12px]">
                <div className="flex flex-row ml-3 gap-2 my-2">
                  <div className="h-3 w-3 rounded-full bg-SDX-Pink" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <img src="/NFT-marketplace-showcase.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NFTMarketplace;
