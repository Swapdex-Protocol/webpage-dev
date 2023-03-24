'use client';

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant, fadeInVariant } from '../utils/motion';
import Button from '../components/Button';
import { LiveDataCard } from '../components';

const Hero = () => {
  const [animateValue, setAnimateValue] = useState({ y: 0, opacity: 1 });
  // const [yTranslate, setYTranslate] = useState((window.innerHeight * -1) / 9);

  useEffect(() => {
    if (window.innerHeight > 740) {
      setAnimateValue({ y: 0, opacity: 1 });
    } else {
      setAnimateValue({ y: 0, opacity: 1 });
    }
  }, []);

  return (
    <section className="sm:pt-16 xs:pt-8 pt-12 relative laptop-s:top-5 z-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex flex-col relative z-10 px-4 gap-6 tablet-s:gap-16 tablet-s:justify-center tablet-s:items-center tablet-s:pt-[70px]">

          <motion.div variants={textVariant(1.0)} className="font-semibold text-[18px] leading-[24px] text-SDX-200 text-start tablet-s:text-center z-10">
            TRULY DECENTRALISED WEB3 BLOCKCHAIN
          </motion.div>
          <motion.h1 variants={textVariant(1.1)} className="font-bold text-[50px] tablet-s:text-[60px] leading-[60px] tablet-s:leading-[70px] text-white text-start tablet-s:text-center">
            Robust for Developers.<br /> <span>Fast for Traders.</span>
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className="font-light text-[16px] tablet-s:text-[18px] leading-[20px] tablet-s:leading-6 text-SDX-200 text-start tablet-s:text-center tablet-s:w-[570px]">
            The SwapDEX Network is Powering Web3, NFT-, and Decentralised Finance Applications While Connecting Major Blockchains With Fast, Secure and Near-Zero Fees.
          </motion.div>
          <motion.div variants={textVariant(1.3)}>
            <div className="flex flex-col tablet-s:flex-row gap-3 mt-5">
              <Button
                link="#wallet"
                image="/swapdex-logo-icon.svg"
                className="border border-SDX-Pink w-full tablet-s:mt-[70px] pink-ghost-button px-[22px] py-[18px]"
                imageClasses="w-[26px] tablet-s:w-[30px]"
                textClasses="text-SDX-200 my-auto"
              >
                Get Started
              </Button>
              <Button
                link="https://discord.gg/hBsxnNZgnX"
                image="/discord_white.svg"
                className="bg-SDX-Pink border border-SDX-Pink w-full tablet-s:mt-[70px] pink-button px-[22px] py-[18px]"
                imageClasses="w-[26px] tablet-s:w-[30px]"
                textClasses="text-SDX-200 my-auto"
                target="_blank"
              >
                Join Discord
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="z-0 laptop-s:w-full laptop-s:-translate-x-0 laptop-s:scale-110 2xl:-top-32 2xl:scale-100 laptop-s:mt-28 tablet-s:w-[1500px] tablet-s:-translate-x-[350px] mobile-s:w-[1150px] mobile-s:-translate-x-[350px] flex absolute mobile-s:top-0 right-0 left-0 bg-SDX-900 opacity-95">
        <motion.div variants={fadeInVariant} initial="initial" animate="animate" className="mx-auto inline-flex z-0 overflow-hidden">
          <img
            src="/hero_BG.webp"
            alt="DeFi_ball_02"
            className="w-full object-contain mx-auto"
          />
        </motion.div>
      </div>
      <motion.div className="mt-12 z-20 mobile-l:mt-28" initial={{ y: 0, opacity: 0 }} animate={animateValue} transition={{ delay: 1.6, duration: 1, type: 'spring' }}>
        <LiveDataCard />
      </motion.div>

    </section>
  );
};

export default Hero;
