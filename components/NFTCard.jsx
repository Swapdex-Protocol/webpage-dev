'use client';

const NFTCard = () => (
  <div className="flex flex-col h-[648px] w-[439px] rounded-3xl nft-glassmorphism rotate-x">
    <div className="relative mt-5 mr-5 ml-5">
      <img
        src="/26_anim.gif"
        className="rounded-[20px]"
      />
      <div className="absolute top-3 right-3">
        <div className="flex flex-row justify-between gap-2 rounded-full backdrop-blur-xl py-1 px-3">
          <img
            src="heart-solid.svg"
            className="w-[33px] object-contain"
          />
          <p className="font-semibold text-[24px] leading-8 text-SDX-200">120</p>
        </div>
      </div>
      <div className="absolute bottom-3 left-3">
        <div className="flex rounded-full backdrop-blur-xl py-3 px-3">
          <p className="font-light text-[16px] leading-6 text-SDX-200">Guardians of SwapDEX</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col mr-5 ml-5 mt-5">
      <div className="flex flex-row justify-between">
        <div className=" flex flex-row gap-3">
          <img
            src="/clock-solid.svg"
            className="object-contain w-[28px]"
          />
          <p className="font-light text-[16px] leading-5 text-SDX-200 my-auto">
            15h : 23m : 12s
          </p>
        </div>
        <div className=" flex flex-row gap-3">
          <img
            src="/tag-solid.svg"
            className="object-contain w-[28px]"
          />
          <p className="font-light text-[16px] leading-5 text-SDX-200 my-auto">
            299 USDT
          </p>
        </div>
      </div>
      <p className="mt-6 font-bold text-[32px] leading-8 text-SDX-200">DIGITAL DEFENDER</p>
      <p className="mt-6 font-light text-[16px] leading-5 text-SDX-200">Properties</p>
      <div className="flex flex-row gap-3 mt-3">
        <div className="rounded-full py-2 px-3 bg-SDX-700">
          <p className="font-light text-[16px] leading-5 text-SDX-200">SDX Ecosystem NFT</p>
        </div>
        <div className="rounded-full py-2 px-3 bg-SDX-700">
          <p className="font-light text-[16px] leading-5 text-SDX-200">#23</p>
        </div>
      </div>
    </div>
  </div>
);

export default NFTCard;
