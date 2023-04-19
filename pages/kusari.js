'use client';

import React from 'react';

import Image from 'next/image';

const Kusari = () => (
  <div className="bg-SDX-900 flex flex-col items-center">

    <Image
      src="/Kusari_Logo.svg"
      objectFit="contain"
      width={300}
      height={300}
      className="mt-20"
    />
    <p className="mt-10 text-5xl font-bold text-SDX-200 mx-auto">Coming Soon</p>
  </div>
);

export default Kusari;
