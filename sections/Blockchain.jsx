'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
      <div className="relative h-full w-full">
        <div className={`${styles.yPaddings} ${styles.xPaddings} flex flex-col mobile-s:-top-5 relative`}>
          {/* Everything in this parent div are page elements with the appropriate margin */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} tablet-s:mt-56 tablet-s:mx-auto flex flex-col`}
          >
            <div className="flex flex-col tablet-s:justify-center tablet-s:items-center laptop-s:mt-10 mt-16">
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

          <div className={`${styles.innerWidth} py-8 laptop-s:py-12 mx-auto`}>
            <div className="flex flex-col laptop-s:flex-row justify-between laptop-s:gap-5 gap-3">

              <div className="relative overflow-hidden">
                <div className="z-10 flex flex-col rounded-xl w-full h-40 px-6 py-3 laptop-s:py-6 laptop-s:h-52 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
                  <div className="flex flex-row gap-2">
                    <div className="w-1 h-full bg-SDX-Pink" />
                    <h3 className="font-semibold text-[20px] leading-7 text-SDX-900">Independent</h3>
                  </div>
                  <span className="font-light text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-[24px] text-SDX-900">Maintaining independence is crucial for SwapDex, as it ensures the network remains trustworthy and free from outside influence</span>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="z-10 flex flex-col rounded-xl w-full h-40 laptop-s:h-52 px-6 py-3 laptop-s:py-6 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
                  <div className="flex flex-row gap-2">
                    <div className="w-1 h-full bg-SDX-Pink" />
                    <h3 className="font-semibold text-[20px] leading-7 text-SDX-900">Open-Source</h3>
                  </div>
                  <span className="font-light text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-[24px] text-SDX-900">Open source is critical for SwapDEX as it promotes transparency, collaboration, innovation, and trust within the community</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col rounded-xl w-full h-40 laptop-s:h-52 px-6 py-3 laptop-s:py-6 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
                  <div className="flex flex-row gap-2">
                    <div className="w-1 h-full bg-SDX-Pink" />
                    <h3 className="font-semibold text-[20px] leading-7 text-SDX-900">Transparent</h3>
                  </div>
                  <span className="font-light text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-[24px] text-SDX-900">SwapDEX values transparency, ensuring that its operations, governance, and decision-making processes are open and accessible to all</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.innerWidth} mx-auto flex flex-col gap-5 mb-5 laptop-s:flex-row justify-between align-middle`}>
            <span className="font-bold text-[30px] leading-[34px] text-SDX-900">SwapDEX in a nutshell</span>
            <div className="flex flex-row justify-between laptop-s:gap-4 rounded-xl p-1 bg-SDX-LightPink/50">
              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button01IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.6]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton01}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">User-Centric</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button02IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.6]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton02}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">Less Complex</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button03IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.6]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton03}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">Rewarding</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.innerWidth} tablet-s:mt-5 tablet-s:mx-auto flex flex-col laptop-s:flex-row justify-between align-middle`}>
            <div className="flex flex-col laptop-s:flex-row">
              <div className="w-full laptop-s:w-1/2 border-2 border-white rounded-tr-2xl rounded-tl-2xl laptop-s:rounded-tr-none laptop-s:rounded-tl-2xl laptop-s:rounded-bl-2xl overflow-hidden p-2 laptop-s:p-5 bg-SDX-800">
                <div className="flex items-center w-full h-full object-contain">
                  <Image
                    src={`${button01IsClicked ? '/slide_01.png' : button02IsClicked ? '/slide_02.png' : '/slide_03.png'}`}
                    alt="Blockchain"
                    width={1600}
                    height={900}
                    className="object-contain"
                  />
                </div>

              </div>
              <div className="w-full laptop-s:w-1/2 rounded-br-2xl rounded-bl-2xl  laptop-s:rounded-bl-none laptop-s:rounded-tr-2xl laptop-s:rounded-rb-2xl border-2 border-white bg-white/80 py-5 laptop-s:py-14 px-5 laptop-s:px-10">
                <h2 className={`${button01IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-5 laptop-s:mb-10`}>User-Centric DeFi Has Arrived!</h2>
                <h2 className={`${button02IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-5 laptop-s:mb-10`}>Reduction of Complexity in DeFi.</h2>
                <h2 className={`${button03IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-5 laptop-s:mb-10`}>Truly Decentralised Rewards!</h2>

                <span className={`${button01IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX offers a seamless DeFi experience by combining advanced technology with user-centric solutions. Built on the Substrate framework, trusted by Polkadot, Enjin and ChainLink, the SDX blockchain ensures secure, cheap, and fast transactions. Our SwapDEX Bridge connects EVM and Substrate networks, enabling cross-network asset transfers. With native solutions like SDX DEX and SDX NFT Marketplace, SwapDEX stands out as a comprehensive, enjoyable DeFi platform for both new and experienced users.</span>
                <span className={`${button02IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX simplifies DeFi by eliminating complexity and becoming a trusted one-stop shop. The SwapDEX network can be accessed on mobile and desktop and integrates essential solutions like cross-chain transfers, a native decentralised exchange (DEX), and a native NFT marketplace. This user-centric approach offers unparalleled convenience while also embracing the development of community-driven DApps through SwapDEX's forkless design. Experience a seamless, scalable and secure DeFi journey on the SwapDEX blockchain.</span>
                <span className={`${button03IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX revolutionizes DeFi by offering equity NFTs in our native solutions like the Limit-Order DEX and NFT Marketplace, allowing the SDX community to invest sustainably and benefit from the adoption of the SwapDEX Network. Projects deploying on SwapDEX can leverage this NFT equity system to integrate their community too. Additionally, SwapDEX provides an NFT plugin for websites, enabling businesses to link NFTs with real-world assets. Experience true DeFi innovation and community empowerment with SwapDEX.</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
