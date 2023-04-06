import React from 'react';
import ConnectButton from './ConnectButton';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className='dark:bg-gray-900 w-full z-20 top-0 left-0'>
			<div className='w-full mx-auto px-10 text-xl lg:grid-cols-3 sm:grid-cols-1'>
				<div className='grid px-1 sm:gap-10 justify-items-center items-center text-xl w-full'>
					<div className='flex justify-between w-full'>
						<Link href='/' className='text-dark-gray text-xl sm:text-2xl'>
							🥔 Potato Swap
						</Link>
						<ConnectButton />
					</div>
					<div className='text-light-gray flex justify-evenly w-full mb-2'>
						<Link href='/' className='cursor-not-allowed lg:mr-8'>
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
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
