'use client';

const BlockchainButton = ({ buttonName, className, textClasses }) => (
  <div
    className={`flex rounded-xl cursor-pointer border-2 border-white transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl  ${className}`}

  >
    <div className="flex mx-auto gap-2">
      <span className={`font-medium text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 ${textClasses}`}>{buttonName}</span>
    </div>
  </div>
);

export default BlockchainButton;
