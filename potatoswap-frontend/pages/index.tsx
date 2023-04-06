import type { NextPage } from 'next';
import NavBar from './components/NavBar';
import SwapBox from './components/SwapBox';
import Footer from './components/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<NavBar />
				<div className='grid mt-4'>
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
			<div className='absolute bottom-0 w-full text-sm'>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
