import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

const ConnectButton = () => {
	const { isConnected } = useAccount();
	return (
		<div className='relative'>
			<ConnectKitButton />
			{isConnected && (
				<span className='top-2 left-10 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
			)}
		</div>
	);
};

export default ConnectButton;
