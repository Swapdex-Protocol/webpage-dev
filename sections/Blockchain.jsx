'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, textVariant } from '../utils/motion';

const Blockchain = () => (
  <section className="bg-gradient-to-t from-SDX-LightPink via-violet-200 to-blue-200 -mt-4">
    <div className="relative h-full w-full backdrop-blur-[500px] bg-[#ffffff9d]">
      <div className={`${styles.yPaddings} ${styles.xPaddings} flex flex-col mobile-s:-top-5 relative`}>
        {/* Everything in this parent div are page elements with the appropriate margin */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} tablet-s:mt-56 tablet-s:mx-auto flex flex-col`}
        >
          <div className="flex flex-col tablet-s:justify-center tablet-s:items-center laptop-s:mt-10 mobile-s:mt-10">
            <motion.div variants={textVariant(0)} className="font-semibold text-[18px] leading-[24px] text-SDX-Pink tablet-s:text-center">
              MADE FOR
            </motion.div>
            <motion.h1 variants={textVariant(0.1)} className="font-bold whitespace-normal text-[40px] leading-[45px] mobile-s:text-[34px] mobile-s:leading-[40px] mobile-m:text-[40px] mobile-m:leading-[48px] my-3 tablet-s:text-[60px] tablet-s:leanding-[70px] tablet-s:text-center">
              True Decentralisation
            </motion.h1>
            <motion.div variants={textVariant(0.2)} className="font-light text-[18px] leading-[24px] text-SDX-900 tablet-s:text-center mobile-l:w-[350px] laptop-s:w-[570px]">
              Independent. Unaffiliated. Free.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Blockchain;
