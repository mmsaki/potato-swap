import React from 'react';
import { ConnectKitButton } from 'connectkit';

const ConnectButton = () => {
	return (
		<div className='relative'>
			<ConnectKitButton />
			<span className='top-2 left-10 absolute  w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
		</div>
	);
};

export default ConnectButton;
