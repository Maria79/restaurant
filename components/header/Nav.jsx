import { navItems } from '@/app/api/data';
import Link from 'next/link';
import React from 'react';

export const Nav = () => {
	return (
		<div className='mb-2'>
			<div className='flex flex-col gap-y-2 items-center  text-slate-700'>
				{navItems.map((nvi, index) => (
					<div key={index}>
						<Link href={`/${nvi.url}`}>{nvi.title}</Link>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};
