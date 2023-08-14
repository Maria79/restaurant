import { Menu } from '@/components/menu/Menu';
import React from 'react';
import { menuData } from '../api/data';

export default function MenuPage() {
	const menu = menuData;

	return (
		<div className='max-w-lg mx-auto p-2 text-slate-200'>
			<Menu menu={menu} />
		</div>
	);
}
