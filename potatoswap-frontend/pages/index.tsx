import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import ArrowIcon from './assets/down-arrow.svg';

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
};

export default Home;
