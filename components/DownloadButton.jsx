'use client';

import Link from 'next/link';

const DownloadButton = ({ children, href, className, target }) => (
  <Link href={href} target={target} className={`rounded-full px-4 py-2 text-SDX-200 bg-SDX-Pink ${className}`}>
    {children}
  </Link>
);

export default DownloadButton;
