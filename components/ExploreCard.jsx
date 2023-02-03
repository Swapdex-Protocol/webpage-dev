'use client';

import Link from 'next/link';

const ExploreCard = ({ title, text, className, link, target }) => (
  <Link href={link} target={target}>
    <div className={`${className} flex flex-row min-h-[200px] tablet-s:h-full w-full overflow-hidden rounded-[17px] justify-between px-5 pb-5 tablet-s:pb-[41px] lighten-on-hover`}>
      <div className="flex flex-col mt-4 laptop-l:mt-[115px] laptop-s:w-5/6">
        <span className="font-bold text-[24px] leading-7 mobile-l:text-[32px] mobile-l:leading-[40px] text-SDX-200 z-10 tablet-s:w-4/5 laptop-s:w-full"> {title} </span>
        <span className="font-light text-[16px] leading-[18px] my-auto mobile-l:text-[16px] mobile-l:leading-[18px] tablet-s:text-[20px] tablet-s:leading-7 tablet-s:mt-3 tablet-s:content-end text-SDX-200 z-10"> {text} </span>
      </div>
      <div className="mobile-s:hidden laptop-s:flex rounded-full w-[57px] h-[57px] border border-SDX-200 mt-auto z-10">
        <img className="mx-auto my-auto w-[21px] h-full" src="arrow-right-solid_white.svg" />
      </div>
    </div>
  </Link>
);

export default ExploreCard;
