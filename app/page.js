import { Footer, Navbar } from '../components';
import { Hero, BlockchainLiveData, TrulyDecentralised, DesktopApp, MobileApp, DEX, NFTMarketplace, CTA } from '../sections';

const Page = () => (
  <div className=" bg-SDX-900 overflow-hidden">
    <Navbar />
    <Hero />
    <BlockchainLiveData />
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
