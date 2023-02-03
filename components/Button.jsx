'use client';

import Link from 'next/link';

const Button = ({ image, link, imageAlt, children, className, imageClasses, textClasses, target }) => (
  <Link href={link} target={target}>
    <div className={`flex flex-row rounded-full ${className}`}>
      <div className="flex mx-auto gap-2">
        <img src={image} alt={imageAlt} className={`${imageClasses}`} />
        <span className={`font-medium text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 ${textClasses}`}>{children}</span>
      </div>
    </div>
  </Link>
);

export default Button;
