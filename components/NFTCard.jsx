'use client';

const NFTCard = () => (
  <div className="flex flex-col sm:h-[648px] sm:w-[439px] rounded-3xl nft-glassmorphism tablet-s:mx-auto">
    <div className="relative mt-3 mr-3 ml-3 mobile-m:mt-5 mobile-m:mr-5 mobile-m:ml-5">
      <img
        src="/26_anim.gif"
        className="rounded-[20px]"
      />
      <div className="absolute top-3 right-3">
        <div className="flex flex-row justify-between gap-2 rounded-full backdrop-blur-xl py-1 px-3">
          <img
            src="heart-solid.svg"
            className="w-[24px] mobile-m:w-[33px] object-contain"
          />
          <p className="font-semibold text-[16px] leading-[18px] mobile-m:text-[24px] mobile-m:leading-8 text-SDX-200">120</p>
        </div>
      </div>
      <div className="absolute bottom-3 left-3">
        <div className="flex rounded-full backdrop-blur-xl py-2 p-2 mobile-m:py-3 mobile-m:px-3">
          <p className="font-light text-[12px] leading-[14px] mobile-m:text-[16px] mobile-m:leading-6 text-SDX-200">Guardians of SwapDEX</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col mr-5 ml-5 mt-5">
      <div className="flex flex-row justify-between">
        <div className=" flex flex-row gap-3">
          <img
            src="/clock-solid.svg"
            className="object-contain w-[18px] mobile-m:w-[28px]"
          />
          <p className="font-light text-[12px] leading-[14px] mobile-m:text-[16px] mobile-m:leading-5 text-SDX-200 my-auto">
            15h : 23m : 12s
          </p>
        </div>
        <div className=" flex flex-row gap-3">
          <img
            src="/tag-solid.svg"
            className="object-contain w-[18px] mobile-m:w-[28px]"
          />
          <p className="font-light text-[12px] leading-[14px] mobile-m:text-[16px] mobile-m:leading-5 text-SDX-200 my-auto">
            299 USDT
          </p>
        </div>
      </div>
      <p className="mt-6 font-bold text-[24px] leading-[30px] mobile-m:text-[32px] mobile-m:leading-8 text-SDX-200">DIGITAL DEFENDER</p>
      <p className="mt-6 font-light text-[14px] leading-[16px] mobile-m:text-[16px] mobile-m:leading-5 text-SDX-200">Properties</p>
      <div className="flex flex-row gap-3 mt-3">
        <div className="rounded-full py-2 px-3 bg-SDX-700 mb-6">
          <p className="font-light text-[12px] leading-[14px] mobile-m:text-[16px] mobile-m:leading-5 text-SDX-200">SDX Ecosystem NFT</p>
        </div>
        <div className="rounded-full py-2 px-3 bg-SDX-700 mb-6">
          <p className="font-light text-[12px] leading-[14px] mobile-m:text-[16px] mobile-m:leading-5 text-SDX-200">#23</p>
        </div>
      </div>
    </div>
  </div>
);

export default NFTCard;
