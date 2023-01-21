import { Footer, Navbar } from '../components';
import { Hero, BlockchainLiveData, TrulyDecentralised, DesktopApp, MobileApp, DEX, NFTMarketplace, CTA } from '../sections';

const Page = () => (
  <div>
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
