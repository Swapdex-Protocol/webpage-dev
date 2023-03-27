'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, textVariant } from '../utils/motion';
import { BlockchainButton } from '../components';

const Blockchain = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
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
                Independent. Open-Source. Free.
              </motion.div>
            </div>
          </motion.div>
          <div className={`${styles.innerWidth} tablet-s:mt-56 tablet-s:mx-auto flex flex-row justify-between align-middle`}>
            <span className="font-bold text-[30px] leading-[34px] text-SDX-900">SwapDEX in a nutshell</span>
            <div className="flex flex-row gap-4">
              <BlockchainButton
                buttonName="Button 01"
                className="px-[10px] py-[10px]"
                textClasses="text-SDX-900 font-light my-auto"
              />
              <BlockchainButton
                link="#wallet"
                buttonName="Button 02"
                className="px-[10px] py-[10px]"
                textClasses="text-SDX-900 font-light my-auto"
              />
              <BlockchainButton
                link="#wallet"
                buttonName="Button 03"
                className="px-[10px] py-[10px]"
                textClasses="text-SDX-900 font-light my-auto"
              />
            </div>
          </div>
          <div className={`${styles.innerWidth} tablet-s:mt-5 tablet-s:mx-auto flex flex-row justify-between align-middle`}>
            <div className="w-1/2 h-80 border-2 border-white bg-white/80 rounded-l-2xl overflow-hidden">
              <img
                src="/desktop_app.png"
                alt="Blockchain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 rounded-r-2xl border-2 border-white bg-white/80 py-14 px-10">
              <h2 className="font-bold text-2xl text-SDX-900 mb-10">Heading</h2>
              <span className="font-light text-lg text-SDX-900">TIt’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
