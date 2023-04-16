'use client';

const ModalButton = ({ logo, logoAlt, className, logoClasses, supportTextClasses, mainTextClasses, mainText, supportText, handleClick }) => (

  <div className={`flex flex-row rounded-full cursor-pointer ${className}`} onClick={handleClick}>
    <img src={logo} alt={logoAlt} className={`${logoClasses}`} />
    <div className="flex flex-col">
      <span className={`font-medium text-[7px] leading-[10px] ${supportTextClasses}`}>{supportText}</span>
      <span className={`font-medium text-[16px] leading-[20px] ${mainTextClasses}`}>{mainText}</span>
    </div>
  </div>

);

export default ModalButton;
