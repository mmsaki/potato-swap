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
						<Link href='/' className='cursor-not-allowed mr-8'>
							Airdrop
							<span className='absolute bg-red-100 text-red-800 text-xs font-medium mr-2 ml-1 px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
								Claim
							</span>
						</Link>
						<Link href='/' className='text-main-green font-bold'>
							Swap
						</Link>
						<Link href='/' className='cursor-not-allowed'>
							Liquidity
						</Link>
					</div>
					<ConnectButton />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
