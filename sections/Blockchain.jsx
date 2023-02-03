'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, textVariant } from '../utils/motion';
import { ExploreCard } from '../components';

const Blockchain = () => (
  <section className={`${styles.yPaddings} ${styles.xPaddings} flex flex-col mobile-s:-top-5 relative bg-SDX-300`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} tablet-s:mt-56 tablet-s:mx-auto flex flex-col`}
    >
      <div className="flex flex-col tablet-s:justify-center tablet-s:items-center laptop-s:mt-10">
        <motion.div variants={textVariant(0)} className="font-semibold text-[18px] leading-[24px] text-SDX-Pink tablet-s:text-center">
          THE SWAPDEX ECOSYSTEM IS
        </motion.div>
        <motion.h1 variants={textVariant(0.1)} className="font-bold whitespace-normal text-[40px] leading-[45px] mobile-m:text-[50px] mobile-m:leading-[60px] my-3 tablet-s:text-[60px] tablet-s:leanding-[70px] tablet-s:text-center">
          Truly Decentralised
        </motion.h1>
        <motion.div variants={textVariant(0.2)} className="font-light text-[18px] leading-[24px] text-SDX-900 tablet-s:text-center mobile-l:w-[350px] laptop-s:w-[570px]">
          Learn how to contribute to the decentralisation of SwapDEX
        </motion.div>
      </div>
    </motion.div>

    <div className={`${styles.innerWidth} mt-5 tablet-s:mt-20 laptop-s:mx-auto flex flex-col tablet-s:flex-row gap-4`}>
      <div className="flex laptop-s:mx-auto laptop-s:w-1/2">
        <ExploreCard className="explore-validator-bg-image translate-bump shadow-hover-dark" link="https://docs.swapdex.network/validator-guides/validator/" target="_blank" title="Become a Validator" text="Join us in our mission to built a truly decentralised and censorship free network and take your place among the SwapDEX validators" />
      </div>
      <div className="flex laptop-s:mx-auto laptop-s:w-1/2">
        <ExploreCard className="explore-governance-bg-image translate-bump shadow-hover-dark" link="https://docs.swapdex.network/what-to-try/democracy/" target="_blank" title="Decentralised Governance" text="Join the movement towards true decentralisation by participating in the governance. Your voice and vote matters in shaping the future" />
      </div>
    </div>
  </section>
);

export default Blockchain;
