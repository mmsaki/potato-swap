import React from 'react';
import ConnectButton from './ConnectButton';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4 text-xl'>
				<div className='grid grid-cols-3 px-4 justify-items-center items-center text-xl p-4 w-full'>
					{/* <div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-sticky'
				> */}
					<Link href='/' className='text-dark-gray text-xl'>
						🥔 Potato Swap
					</Link>
					<div className='flex flex-row gap-10 text-light-gray'>
						<Link href='/' className='cursor-not-allowed'>
							Trade
						</Link>
						<Link href='/' className='text-main-green font-bold mr-6'>
							Swap
							<span className='absolute bg-green-100 text-green-800 text-xs font-medium px-2 ml-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
								New
							</span>
						</Link>
						<Link href='/' className='cursor-not-allowed'>
							Liquidity
						</Link>
						<Link href='/' className='cursor-not-allowed'>
							FlashLoan
						</Link>
					</div>
					<ConnectButton />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
