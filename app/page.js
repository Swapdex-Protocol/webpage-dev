import { Footer, Navbar } from '../components';
import { Hero, Blockchain, TrulyDecentralised, DesktopApp, MobileApp, DEX, NFTMarketplace, CTA } from '../sections';

const Page = () => (
  <div className=" bg-SDX-900 overflow-hidden">
    <div className="h-screen">
      <Navbar />
      <Hero />
    </div>
    <Blockchain />
    <TrulyDecentralised />
    <DesktopApp />
    <MobileApp />
    <DEX />
    <NFTMarketplace />
    <CTA />
    <Footer />
  </div>
);

export default Page;
