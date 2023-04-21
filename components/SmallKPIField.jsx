'use client';

const SmallKPIField = ({ title, data, isLive }) => (
  <div className="flex bg-white w-full h-[120px] mobile-m:w-full mobile-m:h-[145px] mobile-l:w-full rounded-[19px] translate-bump-xs shadow-hover">
    <div className="flex flex-col justify-between w-full m-[13px]">
      <div className="flex w-full flex-row justify-between">
        <span className="w-[58px] font-semibold mobile-m:text-[18px] mobile-m:leading-[24px] tablet-s:text-[20px] tablet-s:leading-7 text-SDX-900">
          {title}
        </span>
        <span className="flex">
          <span
            className={`absolute rounded-full w-[11px] h-[11px] animate-ping opacity-75 ${
              isLive ? 'bg-lime-500' : 'bg-amber-500'
            }`}
          />
          <span
            className={`relative rounded-full w-[11px] h-[11px] ${
              isLive ? 'bg-lime-500' : 'bg-amber-500'
            }`}
          />
        </span>
      </div>
      <span
        className="flex w-full justify-end mb-[17px] font-semibold text-[18px] leading-5 mobile-m:text-[24px] mobile-m:leading-[32px] tablet-s:text-[22px] tablet-s:leading-8 text-SDX-900"
      >
        {isLive ? (
          data
        ) : (
          <div className="h-[24px] w-3/4 bg-gray-300 animate-pulse rounded" />
        )}
      </span>
    </div>
  </div>
);

export default SmallKPIField;

