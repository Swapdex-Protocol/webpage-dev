'use client';

import Link from 'next/link';
import Image from 'next/image';

const MobileDownloadButton = ({ logo, link, logoAlt, className, logoClasses, supportTextClasses, mainTextClasses, target, mainText, supportText }) => (
  <Link href={link} target={target}>
    <div className={`flex flex-row rounded-full ${className}`}>
      <Image src={logo} alt={logoAlt} width={35} height={35} className={`object-contain ${logoClasses}`} />
      <div className="flex flex-col">
        <span className={`font-medium text-[7px] leading-[10px] ${supportTextClasses}`}>{supportText}</span>
        <span className={`font-medium text-[16px] leading-[20px] ${mainTextClasses}`}>{mainText}</span>
      </div>
    </div>
  </Link>
);

export default MobileDownloadButton;
