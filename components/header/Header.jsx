'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Nav } from './Nav';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	function handleOpenClick() {
		setShowMenu(!showMenu);
	}
	function handleCloseClick() {
		setShowMenu(!showMenu);
	}

	return (
		<div className='w-full pb-2'>
			<div>
				<div className='flex items-center justify-between px-10 mb-1'>
					{/* logo */}
					<div>
						<Image
							src='/image/logo-transparent.png'
							alt=''
							width={100}
							height={100}
						/>
					</div>
					{/* Nav */}
					<div>
						{!showMenu ? (
							<AiOutlineMenu size={28} onClick={handleOpenClick} />
						) : (
							<AiOutlineClose size={28} onClick={handleCloseClick} />
						)}
					</div>
				</div>
				{showMenu && <Nav />}
			</div>
		</div>
	);
};
