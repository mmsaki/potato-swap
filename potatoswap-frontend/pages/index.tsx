import type { NextPage } from 'next';
import ArrowIcon from './assets/down-arrow.svg';
import NavBar from './components/NavBar';
import tokens from './token-list.json';
import { useState } from 'react';
import potatoAbi from './abis/IPotatoToken.json';
import { useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';
import { PotatoRouterV2 } from './utils';
import ethers from 'ethers';

const Home: NextPage = () => {
	const [tokenOne, setTokenOne] = useState(tokens[0]);
	const [tokenTwo, setTokenTwo] = useState(tokens[1]);
	const [tokenOneBalance, setTokenOneBalance] = useState(0);
	const [tokenTwoBalance, setTokenTwoBalance] = useState(0);

	const { address, isConnected } = useAccount();

	var { data, isError, isLoading } = useContractRead({
		// @ts-ignore
		address: tokenOne.address,
		abi: potatoAbi.output.abi,
		functionName: 'balanceOf',
		args: [address],
		watch: true,
		onSuccess(data) {
			// @ts-ignore
			setTokenOneBalance(data.toString() / 10 ** 18);
		},
	});

	var { data, isError, isLoading } = useContractRead({
		// @ts-ignore
		address: tokenTwo.address,
		abi: potatoAbi.output.abi,
		functionName: 'balanceOf',
		args: [address],
		watch: true,
		onSuccess(data) {
			// @ts-ignore
			setTokenTwoBalance(data.toString() / 10 ** 18);
		},
	});

	return (
		<div className='border-box p-0 m-0'>
			<NavBar />
			<div className='flex-1'>
				<p className='flex text-4xl font-bold text-dark-gray justify-center mb-5'>
					Swap Tokens
				</p>
				<p className='flex justify-center text-2xl text-light-gray mb-5'>
					Convert your tokens with ease.
				</p>
			</div>
			<div className='grid justify-center'>
				<div className='grid bg-light-green max-h-200 max-w-full rounded-3xl'>
					<div
						style={{
							height: '20px',
							width: '500px',
							margin: '4px 20px 0px',
						}}
						className='items-center'
					>
						<p className='text-light-gray text-xl float-right font-light'>
							Slippage
						</p>
					</div>
					<div className='flex justify-between items-center h-12 mx-6 mb-2'>
						<p className='text-light-gray text-4xl'>Swap</p>
						<div className='flex justify-center gap-1 text-lg text-black bg-gray-400/20 rounded-lg px-2 py-1'>
							<button className='flex justify-center px-4'>0.5%</button>
							<button className='flex justify-center px-4 bg-white rounded-md shadow-md'>
								2.5%
							</button>
							<button className='flex justify-center px-4'>5.0%</button>
						</div>
					</div>
					<div className='h-32 mx-6 mb-2 mt-10 bg-dark-green rounded-2xl'>
						<div className='flex items-center justify-between mt-4'>
							<input
								className='border-inherit text-6xl ml-4 w-96 bg-transparent focus:outline-0 text-light-green'
								placeholder='0'
								type='number'
							/>
							<button className='flex justify-between items-center w-60 h-16 bg-light-green mr-4 rounded-full'>
								<div className='flex w-12 h-12 ml-2 bg-amber-400 rounded-full'>
									<img src={tokenOne.img} />
								</div>
								<div className='text-4xl pr-0 text-dark-green'>
									{tokenOne.ticker}
								</div>
								<div className='pr-4'>
									<ArrowIcon />
								</div>
							</button>
						</div>
						<div className='flex gap-2 mt-1  text-light-green text-lg float-right mr-10'>
							<p>Balance: {tokenOneBalance}</p>
							<button className='font-bold text-purple-100'>Max</button>
						</div>
					</div>
					<div className='h-32 mx-6 mb-10 bg-dark-green rounded-2xl'>
						<div className='flex items-center justify-between mt-4'>
							<input
								className='border-inherit text-6xl ml-4 w-96 bg-transparent focus:outline-0 text-light-green'
								placeholder='0'
								type='number'
							/>
							<button className='flex justify-between items-center w-60 h-16 bg-light-green mr-4 rounded-full'>
								<div className='flex w-12 h-12 ml-2 bg-amber-400 rounded-full'>
									<img src={tokenTwo.img} />
								</div>
								<div className='text-4xl pr-0 text-dark-green'>
									{tokenTwo.ticker}
								</div>
								<div className='pr-4'>
									<ArrowIcon />
								</div>
							</button>
						</div>
						<div className='flex gap-2 mt-1  text-light-green text-lg float-right mr-10'>
							<p>Balance: {tokenTwoBalance}</p>
						</div>
					</div>
					<button className='flex items-center justify-center h-20 mx-6 mb-8 text-light-green text-3xl bg-dark-green rounded-2xl'>
						{isConnected && 'Swap'}
						{!isConnected && 'Connect to Swap'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
