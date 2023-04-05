import { Types } from 'connectkit';
import Image from 'next/image';

const MyCustomAvatar = ({
	address,
	ensImage,
	ensName,
	size,
	radius,
}: Types.CustomAvatarProps) => {
	return (
		<div
			style={{
				overflow: 'hidden',
				borderRadius: radius,
				height: size,
				width: size,
				background: '#333', // your function here
			}}
		>
			{ensImage && (
				<Image src={ensImage} alt={'Ens Image'} width={'100'} height={'100'} />
			)}
		</div>
	);
};

export default MyCustomAvatar;
