import Image from 'next/image';

export const Hero = () => {
	return (
		<div className='relative -z-10'>
			<div className='absolute  top-0  w-full min-h-full h-[100vh]'>
				<Image
					src='/image/front-cosy.png'
					alt=''
					objectFit='cover'
					objectPosition='63% 25%'
					fill
				/>
			</div>
			<div className='absolute bg-slate-600 opacity-70 w-full min-h-full h-[100vh]'></div>
		</div>
	);
};
