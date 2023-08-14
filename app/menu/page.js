import { Menu } from '@/components/menu/Menu';
import getMenu from '@/libs/getMenu';
import React from 'react';

export default async function MenuPage() {
	const menu = await getMenu();

	return (
		<div className='max-w-lg mx-auto p-2 text-slate-200'>
			<Menu menu={menu} />
		</div>
	);
}
