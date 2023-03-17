'use client';

const LargeKPIField = ({ title, data }) => (
  <div className="flex bg-white h-[120px] laptop-l:w-full mobile-m:h-[145px] rounded-[19px] col-span-2 translate-bump-xs shadow-hover">
    <div className="flex flex-col justify-between w-full m-[13px]">
      <div className="flex w-full flex-row justify-between">
        <span className="w-[150px] font-semibold mobile-m:text-[18px] mobile-m:leading-[24px] tablet-s:text-[20px] tablet-s:leading-7 text-SDX-900">
          {title}
        </span>
        <span className="flex">
          <span className="absolute rounded-full bg-lime-500 w-[11px] h-[11px] animate-ping opacity-75" />
          <span className="relative rounded-full bg-lime-500 w-[11px] h-[11px]" />
        </span>
      </div>
      <span className="flex w-full justify-end mb-[17px] font-semibold text-[18px] leading-5 mobile-m:text-[24px] mobile-m:leading-[32px] text-SDX-900">
        {data}
      </span>
    </div>
  </div>
);

export default LargeKPIField;
