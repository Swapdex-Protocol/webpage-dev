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
            <div className="flex flex-col laptop-s:flex-row justify-between gap-5">

              <div className="relative overflow-hidden">
                <div className="z-10 flex flex-col rounded-xl w-full h-40 laptop-s:h-52 px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
                  <div className="flex flex-row gap-2">
                    <div className="w-1 h-full bg-SDX-Pink" />
                    <h3 className="font-semibold text-[20px] leading-7 text-SDX-900">Independent</h3>
                  </div>
                  <span className="font-light text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-[24px] text-SDX-900">Maintaining independence is crucial for SwapDex, as it ensures the network remains trustworthy and free from outside influence</span>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="z-10 flex flex-col rounded-xl w-full h-40 laptop-s:h-52 px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
                  <div className="flex flex-row gap-2">
                    <div className="w-1 h-full bg-SDX-Pink" />
                    <h3 className="font-semibold text-[20px] leading-7 text-SDX-900">Open-Source</h3>
                  </div>
                  <span className="font-light text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-[24px] text-SDX-900">Open source is critical for SwapDEX as it promotes transparency, collaboration, innovation, and trust within the community</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col rounded-xl w-full h-40 laptop-s:h-52 px-6 py-3 gap-5 border-2 border-white transition ease-in-out delay-75 bg-white/[0.6] hover:bg-white/80">
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
                className={`flex rounded-xl cursor-pointer border-2 ${button01IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.8]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton01}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">Ecosystem</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button02IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.8]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton02}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">Added Value</span>
                </div>
              </div>

              <div
                className={`flex rounded-xl cursor-pointer border-2 ${button03IsClicked ? 'border-white bg-white' : 'border-SDX-LightPink bg-white/[0.8]'} transition ease-in-out delay-75 backdrop-blur-xl px-[10px] py-[10px]`}
                onClick={handleClickButton03}
              >
                <div className="flex mx-auto gap-2">
                  <span className="text-[16px] leading-[20px] tablet-s:text-[18px] tablet-s:leading-5 text-SDX-900 font-medium my-auto">Equity NFTs</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.innerWidth} tablet-s:mt-5 tablet-s:mx-auto flex flex-col laptop-s:flex-row justify-between align-middle`}>
            <div className="flex flex-col laptop-s:flex-row">
              <div className="w-full laptop-s:w-1/2 border-2 border-white rounded-tr-2xl rounded-tl-2xl laptop-s:rounded-tr-none laptop-s:rounded-tl-2xl laptop-s:rounded-bl-2xl overflow-hidden p-2 laptop-s:p-5 bg-SDX-800">
                <img
                  src={`${button01IsClicked ? '/slide_01.png' : button02IsClicked ? '/slide_02.png' : '/slide_03.png'}`}
                  alt="Blockchain"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full laptop-s:w-1/2 rounded-br-2xl rounded-bl-2xl  laptop-s:rounded-bl-none laptop-s:rounded-tr-2xl laptop-s:rounded-rb-2xl border-2 border-white bg-white/80 py-10 laptop-s:py-14 px-5 laptop-s:px-10">
                <h2 className={`${button01IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-10`}>User-Centric DeFi Has Arrived!</h2>
                <h2 className={`${button02IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-10`}>Reduction of Complexity in DeFi.</h2>
                <h2 className={`${button03IsClicked ? '' : 'hidden'} font-bold text-3xl text-SDX-900 mb-10`}>Truly Decentralised Rewards!</h2>

                <span className={`${button01IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX offers a seamless DeFi experience by combining advanced technology with user-centric solutions. Built on the Substrate framework, trusted by Polkadot, Enjin and ChainLink, the SDX blockchain ensures secure, cheap, and fast transactions. Our SwapDEX Bridge connects EVM and Substrate networks, enabling cross-network asset transfers. With native solutions like SDX DEX and SDX NFT Marketplace, SwapDEX stands out as a comprehensive, enjoyable DeFi platform for both new and experienced users.</span>
                <span className={`${button02IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX simplifies DeFi by eliminating complexity and becoming your trusted one-stop shop. Our all-in-one platform, available on mobile and desktop, integrates essential solutions like cross-chain transfers, SDX DEX, and SDX NFT Marketplace. This user-centric approach offers unparalleled convenience while embracing community-driven DApps through its modular design. Experience the future of DeFi with SwapDEX: your go-to hub for a seamless and effortless DeFi journey.</span>
                <span className={`${button03IsClicked ? '' : 'hidden'} font-light text-lg text-SDX-900`}>SwapDEX revolutionizes DeFi by offering equity NFTs in native solutions like the Limit-Order DEX and NFT Marketplace, allowing the SDX community to invest sustainably and decentralize rewards. Projects deploying on SwapDEX can leverage this system to add real value to their NFT collections. Additionally, SwapDEX provides an NFT plugin for webshops, enabling projects to link NFTs with real-world assets. Experience true DeFi innovation and community empowerment with SwapDEX's unique equity NFT offerings.</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
