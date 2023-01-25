'use client';

import Link from 'next/link';

const ExploreCard = ({ title, text, className, link, target }) => (
  <Link href={link} target={target}>
    <div className={`${className} flex flex-row h-full w-full overflow-hidden rounded-[17px] justify-between pr-[21px] pl-[21px] pb-[41px] lighten-on-hover`}>
      <div className="flex flex-col mt-[115px] w-5/6">
        <span className="font-bold text-[32px] leading-[40px] text-SDX-200 z-10"> {title} </span>
        <span className="font-light text-[18px] leading-[24px] text-SDX-200 z-10"> {text} </span>
      </div>
      <div className="rounded-full w-[57px] h-[57px] border border-SDX-200 mt-auto z-10">
        <img className="mx-auto my-auto w-[21px] h-full" src="arrow-right-solid_white.svg" />
      </div>
    </div>
  </Link>
);

export default ExploreCard;
