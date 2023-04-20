'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const DownloadModal = ({ isOpen, header, subheader, body, footer, handleClose }) => {
  const modalRef = useRef(null);

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
      className="flexCenter fixed inset-0 z-50 bg-SDX-900/30 backdrop-blur-sm"
    >
      <div className="w-full flexCenter">
        <div ref={modalRef} className="xl:w-2/5 laptop-s:w-8/12 md:w-11/12 mobile-s:w-11/12 bg-white flex flex-col rounded-xl">
          <div className="flex justify-end">
            <div className="relative w-3 h-3 minlg:w-6 minlg:h-6 cursor-pointer bg-SDX-Pink border-2 border-gray-200 -top-2 -right-2 p-4 rounded-full" onClick={handleClose}>
              <Image
                src="/cross.png"
                alt="cross"
                layout="fill"
                className="scale-[0.4]"
              />
            </div>
          </div>

          <div className="flex flex-col w-full laptop-s:px-10 mobile-s:px-5 pb-5">
            <h2 className="text-3xl font-bold leading-8 mobile-s:mb-2 laptop-s:mb-1">{header}</h2>
            <span className="text-sm font-light laptop-s:leading-6 mobile-s:leading-5 laptop-s:pb-2">{subheader}</span>
          </div>
          {body}
          {footer}
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadModal;
