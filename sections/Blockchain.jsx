'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { KPICardFadeInVariant, staggerContainer, textVariant } from '../utils/motion';
import { LiveDataCard, ExploreCard } from '../components';

const Blockchain = () => (
  <section className={`${styles.yPaddings} flex flex-col h-screen relative top-5 bg-SDX-300`}>
    <motion.div
      variants={KPICardFadeInVariant}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      <LiveDataCard />
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col translate-y-[-150px]`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div variants={textVariant(0)} className="font-semibold text-[18px] leading-[24px] text-SDX-Pink text-center">
          THE SWAPDEX ECOSYSTEM IS
        </motion.div>
        <motion.h1 variants={textVariant(0.1)} className="font-bold text-[60px] leanding-[70px] text-SDX-900 text-center">
          Truly Decentralised
        </motion.h1>
        <motion.div variants={textVariant(0.2)} className="font-light text-[18px] leading-[24px] text-SDX-900 text-center w-[570px]">
          Learn how to contribute to the decentralisation of SwapDEX
        </motion.div>
      </div>
    </motion.div>

    <div className={`${styles.innerWidth} mx-auto flex flex-row gap-[29px] translate-y-[-100px]`}>
      <div className="flex mx-auto w-1/2">
        <ExploreCard className="explore-validator-bg-image" link="https://docs.swapdex.network/validator-guides/validator/" target="_blank" title="Become a Validator" text="Join us in our mission to built a truly decentralised and censorship free network and take your place among the SwapDEX validators" />
      </div>
      <div className="flex mx-auto w-1/2">
        <ExploreCard className="explore-governance-bg-image" link="https://docs.swapdex.network/what-to-try/democracy/" target="_blank" title="Decentralised Governance" text="Join the movement towards true decentralisation by participating in the governance. Your voice and vote matters in shaping the future" />
      </div>
    </div>
  </section>
);

export default Blockchain;
