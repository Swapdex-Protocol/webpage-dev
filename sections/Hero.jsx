'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant, fadeInVariant } from '../utils/motion';
import Button from '../components/Button';

const Hero = () => (
  <section className={`${styles.yPaddings} h-screen relative top-5`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 pt-[70px]">
        <motion.div variants={textVariant(1.0)} className="font-semibold text-[18px] leading-[24px] text-SDX-200 text-center pb-[27px]">
          DECENTRALISED FINANCE ECOSYSTEM
        </motion.div>
        <motion.h1 variants={textVariant(1.1)} className="font-bold text-[60px] leanding-[70px] text-SDX-200 text-center pb-[27px]">
          Robust for Developers.<br />Fast for Traders.
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="font-extralight text-[18px] leading-[24px] text-SDX-200 text-center w-[570px]">
          SDX Governance Coin, Powering Web3 NFT and Decentralised Finance Applications and Connecting Major Blockchains, Fast, Secure and With Near-Zero Fees.
        </motion.div>
        <motion.div variants={textVariant(1.3)}>
          <div className="flex gap-[29px]">
            <Button
              link="www.google.com"
              image="/swapdex-logo-icon.svg"
              className="border border-SDX-Pink inline-flex mt-[70px] pink-ghost-button"
              imageClasses="w-[26px]"
              textClasses="text-SDX-200"
            >
              Get Started
            </Button>
            <Button
              link="https://discord.gg/hBsxnNZgnX"
              image="/discord_white.svg"
              className="bg-SDX-Pink border border-SDX-Pink inline-flex mt-[70px] pink-button"
              imageClasses="w-[26px]"
              textClasses="text-SDX-200"
              target="_blank"
            >
              Join Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
    <div className="w-full flex absolute top-0 right-0 left-0 bg-SDX-900 opacity-95">
      <motion.div variants={fadeInVariant} initial="initial" animate="animate" className="mx-auto inline-flex z-0 image_blur_9px overflow-hidden">
        <img
          src="/hero_ball_02.png"
          alt="DeFi_ball_02"
          className="rotate-[15deg] object-contain w-full mx-auto -translate-x-[70px] translate-y-[100px]"
        />
      </motion.div>
      <motion.div variants={fadeInVariant} initial="initial" animate="animate" className="mx-auto inline-flex z-0 image_blur_9px overflow-hidden">
        <img
          src="/hero_ball_01.png"
          alt="DeFi_ball_01"
          className="-rotate-[55deg] object-contain w-5/6 mx-auto translate-x-[70px] translate-y-[-200px]"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
