'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, textVariant } from '../utils/motion';

const Blockchain = () => {
  const [button01IsClicked, setButton01IsClicked] = useState(true);
  const [button02IsClicked, setButton02IsClicked] = useState(false);
  const [button03IsClicked, setButton03IsClicked] = useState(false);

  const handleClickButton01 = () => {
    setButton01IsClicked(true);
    setButton02IsClicked(false);
    setButton03IsClicked(false);
  };

  const handleClickButton02 = () => {
    setButton01IsClicked(false);
    setButton02IsClicked(true);
    setButton03IsClicked(false);
  };

  const handleClickButton03 = () => {
    setButton01IsClicked(false);
    setButton02IsClicked(false);
    setButton03IsClicked(true);
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
                Independent. Open-Source. Transparent.
              </motion.div>
            </div>
          </motion.div>

          <div className={`${styles.innerWidth} ${styles.yPaddings} mx-auto`}>
            <div className="flex flex-row justify-between gap-5">
              <div className="relative">
                <div className="absolute rounded-full w-6 h-6 bg-SDX-Pink z-0 blur-lg" />
                <div className="z-10 flex flex-col rounded-xl w-full px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl">
                  <h3 className="font-semibold mobile-m:text-[18px] mobile-m:leading-[24px] tablet-s:text-[20px] tablet-s:leading-7 text-SDX-900">Independent</h3>
                  <span className="font-light text-[18px] leading-[24px] text-SDX-900">Maintaining independence is crucial for swapdex, as it ensures the network remains trustworthy and free from outside influence</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="flex rounded-full w-24 h-36 animate-[spin_5s_linear_infinite] blur-xl bg-cyan-400 z-0 justify-center items-center" />
                </div>
                <div className="z-10 flex flex-col rounded-xl w-full px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-2xl">
                  <h3 className="font-semibold mobile-m:text-[18px] mobile-m:leading-[24px] tablet-s:text-[20px] tablet-s:leading-7 text-SDX-900">Open-Source</h3>
                  <span className="font-light text-[18px] leading-[24px] text-SDX-900">Open source is critical for SwapDEX as it promotes transparency, collaboration, innovation, and trust within the community</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute rounded-full w-6 h-6 bg-SDX-Pink z-0 blur-lg" />
                <div className="flex flex-col rounded-xl w-full px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl">
                  <h3 className="font-semibold mobile-m:text-[18px] mobile-m:leading-[24px] tablet-s:text-[20px] tablet-s:leading-7 text-SDX-900">Transparent</h3>
                  <span className="font-light text-[18px] leading-[24px] text-SDX-900">SwapDEX values transparency, ensuring that its operations, governance, and decision-making processes are open and accessible to all</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.innerWidth} mx-auto flex flex-row justify-between align-middle`}>
            <span className="font-bold text-[30px] leading-[34px] text-SDX-900">SwapDEX in a nutshell</span>
            <div className="flex flex-row gap-4">
              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button01IsClicked ? 'border-SDX-LightPink' : 'border-white'} transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton01}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-light my-auto">Button 01</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button02IsClicked ? 'border-SDX-LightPink' : 'border-white'} transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton02}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-light my-auto">Button 02</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button03IsClicked ? 'border-SDX-LightPink' : 'border-white'} transition ease-in-out delay-75 bg-white/[0.2] hover:bg-white/80 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton03}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-light my-auto">Button 03</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.innerWidth} tablet-s:mt-5 tablet-s:mx-auto flex flex-row justify-between align-middle`}>
            <div className="w-1/2 h-80 border-2 border-white bg-white/80 rounded-l-2xl overflow-hidden">
              <img
                src={`${button01IsClicked ? '/desktop_app.png' : button02IsClicked ? '/Mobile_Wallet_Showcase.webp' : '/DEX-Showcase_03.webp'}`}
                alt="Blockchain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 rounded-r-2xl border-2 border-white bg-white/80 py-14 px-10">
              <h2 className={`${button01IsClicked ? '' : 'hidden'} font-bold text-2xl text-SDX-900 mb-10`}>Heading 01</h2>
              <h2 className={`${button02IsClicked ? '' : 'hidden'} font-bold text-2xl text-SDX-900 mb-10`}>Heading 02</h2>
              <h2 className={`${button03IsClicked ? '' : 'hidden'} font-bold text-2xl text-SDX-900 mb-10`}>Heading 03</h2>

              <span className={`${button01IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus lorem, dignissim vitae ex quis, mattis egestas sem. Aenean eu arcu a lorem varius egestas eget vel turpis.</span>
              <span className={`${button02IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>Curabitur sit amet scelerisque justo. Ut imperdiet consequat finibus.</span>
              <span className={`${button03IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>Fusce bibendum sollicitudin vulputate. Nam at augue consectetur, hendrerit nibh in, lacinia sem.</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
