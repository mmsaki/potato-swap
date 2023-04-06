import type { NextPage } from 'next';
import NavBar from './components/NavBar';
import SwapBox from './components/SwapBox';
import Footer from './components/Footer';

const Home: NextPage = () => {
	return (
		<div className='h-screen'>
			<div className=''>
				<div className='grid pt-4'>
					<NavBar />
					<p className='flex text-3xl font-bold text-dark-gray justify-center mb-5'>
						Swap Tokens
					</p>
					<p className='flex justify-center text-xl text-light-gray mb-5'>
						Convert your tokens with ease.
					</p>
				</div>
				<div className='flex justify-center'>
					<SwapBox />
				</div>
			</div>
			<div className='absolute bottom-0 w-[100vw]'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
