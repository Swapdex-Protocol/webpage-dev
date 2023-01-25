'use client';

const LargeKPIField = ({ title, data }) => (
  <div className="flex bg-white w-[361px] h-[145px] rounded-[19px]">
    <div className="flex flex-col justify-between w-full m-[13px]">
      <div className="flex w-full flex-row justify-between">
        <span className="w-[150px] font-semibold text-[18px] leading-[24px] text-SDX-900">
          {title}
        </span>
        <div className="rounded-full bg-lime-500 w-[11px] h-[11px]" />
      </div>
      <span className="flex w-full justify-end mb-[17px] font-semibold text-[24px] leading-[32px] text-SDX-900">
        {data}
      </span>
    </div>
  </div>
);

export default LargeKPIField;
