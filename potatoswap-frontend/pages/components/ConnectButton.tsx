import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

const ConnectButton = () => {
	const { isConnected } = useAccount();
	return (
		<div className='relative'>
			<ConnectKitButton />
		</div>
	);
};

export default ConnectButton;
