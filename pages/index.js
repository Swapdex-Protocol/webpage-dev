
import { Hero, Blockchain, DesktopApp, MobileApp, DEX, NFTMarketplace, CTA } from '../sections';

const Page = () => (
  <div className=" bg-SDX-900 overflow-hidden">
    <div className="z-20">
      <Hero />
    </div>
    <div className="z-0 tablet-s:-translate-y-56">
      <Blockchain />
    </div>
    <DesktopApp />
    <MobileApp />
    <DEX />
    <NFTMarketplace />
    <CTA />
  </div>
);

export default Page;
