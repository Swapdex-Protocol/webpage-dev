'use client';

import Link from 'next/link';

const Button = ({ image, link, imageAlt, children, className, imageClasses, textClasses, target }) => (
  <Link href={link} target={target}>
    <div className={`rounded-full px-[22px] py-[18px] ${className}`}>
      <img src={image} alt={imageAlt} className={`mr-2 ${imageClasses}`} />
      <span className={`font-medium text-[16px] leading-[20px] ${textClasses}`}>{children}</span>
    </div>
  </Link>
);

export default Button;
