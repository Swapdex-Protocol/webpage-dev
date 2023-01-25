'use client';

import Link from 'next/link';

const Button = ({ image, link, imageAlt, children, className, imageClasses, textClasses, target }) => (
  <Link href={link} target={target}>
    <div className={`flex flex-row rounded-full ${className}`}>
      <img src={image} alt={imageAlt} className={`${imageClasses}`} />
      <span className={`font-medium text-[16px] leading-[20px] ${textClasses}`}>{children}</span>
    </div>
  </Link>
);

export default Button;
