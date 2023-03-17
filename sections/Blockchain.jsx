'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, textVariant } from '../utils/motion';

const Blockchain = () => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const card of document.querySelectorAll('.card')) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }

  return (
    <section className={`${styles.yPaddings} ${styles.xPaddings} flex flex-col mobile-s:-top-5 relative bg-white`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} tablet-s:mt-56 tablet-s:mx-auto flex flex-col`}
      >
        <div className="flex flex-col tablet-s:justify-center tablet-s:items-center laptop-s:mt-10">
          <motion.div variants={textVariant(0)} className="font-semibold text-[18px] leading-[24px] text-SDX-Pink tablet-s:text-center">
            MADE FOR
          </motion.div>
          <motion.h1 variants={textVariant(0.1)} className="font-bold whitespace-normal text-[40px] leading-[45px] mobile-m:text-[50px] mobile-m:leading-[60px] my-3 tablet-s:text-[60px] tablet-s:leanding-[70px] tablet-s:text-center">
            True Decentralisation
          </motion.h1>
          <motion.div variants={textVariant(0.2)} className="font-light text-[18px] leading-[24px] text-SDX-900 tablet-s:text-center mobile-l:w-[350px] laptop-s:w-[570px]">
            Independent. Unaffiliated. Free.
          </motion.div>
        </div>
      </motion.div>
      <div className={`${styles.innerWidth} ${styles.yPaddings} flex justify-center items-center mx-auto`}>
        <div className="grid grid-cols-3 gap-2">
          <div className="card ">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">Governance</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">Referral System</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">Staking System</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">NFT Marketplace</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">Limit-Order DEX</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-border" />
            <div className="card-content flex flex-col">
              <img src="/governance_tile.png" className="h-1/2 mx-9 mt-5" />
              <div className="h-1/2 px-10 grid grid-rows-3 grid-flow-col-dense gap-1 py-5">
                <img src="/Windows_logo_-_2021_(Pink).svg" className="row-span-3 mr-3" />
                <div className="col-span-2 text-lg font-bold">Dashboard</div>
                <div className="row-span-2 col-span-2 text-sm">community-driven decision-making, transparent, efficient, inclusive, adaptable, secure.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
