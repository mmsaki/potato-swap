import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import MyCustomAvatar from './components/MyCustomAvatar';

const alchemyId = process.env.ALCHEMY_ID;

const { chains, provider, webSocketProvider } = configureChains(
	[goerli, polygonMumbai],
	[publicProvider()]
);

const client = createClient(
	getDefaultClient({
		appName: 'Potato Swap',
		alchemyId,
		chains,
	})
);

function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider
				theme='soft'
				mode='light'
				options={{
					customAvatar: MyCustomAvatar,
					disclaimer: (
						<>
							By connecting your wallet you agree to the{' '}
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://en.wikipedia.org/wiki/Terms_of_service'
							>
								Terms of Service
							</a>{' '}
							and{' '}
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://en.wikipedia.org/wiki/Privacy_policy'
							>
								Privacy Policy
							</a>
						</>
					),
				}}
			>
				<Component {...pageProps} />
			</ConnectKitProvider>
		</WagmiConfig>
	);
}

export default App;
