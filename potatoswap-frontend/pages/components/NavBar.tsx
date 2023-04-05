import React from 'react';
import ConnectButton from './ConnectButton';
import Link from 'next/link';

const NavBar = () => {
	return (
		<>
			<div className='grid grid-cols-3  px-10 justify-items-center items-center text-xl p-10'>
				<Link href='/' className='text-dark-gray text-xl'>
					🥔 Potato Swap
				</Link>
				<div className='flex flex-row gap-10 text-light-gray'>
					<Link href='/' className='cursor-not-allowed'>
						Trade
					</Link>
					<Link href='/' className='text-main-green font-bold'>
						Swap
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
		</>
	);
};

export default NavBar;
