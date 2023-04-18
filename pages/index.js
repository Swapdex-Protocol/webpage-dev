import { Footer, Navbar } from '../components';
import { Hero, Blockchain, DesktopApp, MobileApp, DEX, NFTMarketplace, CTA } from '../sections';

const Page = () => (
  <div className=" bg-SDX-900 overflow-hidden">
    <div className="z-20">
      <Navbar />
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
    <Footer />
  </div>
);

export default Page;
