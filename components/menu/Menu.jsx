'use client';

import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import MenuType from './MenuType';

export const Menu = ({ menu }) => {
	const menuList = menu.menu;

	const [selected, setSelected] = useState('entrantes');
	const [active, setActive] = useState(false);

	function onSelect(type) {
		setSelected(type);
		setActive(true);
	}

	const menuSelectedData = menuList.filter((m) => m.type === selected);
	const menuSelected = menuSelectedData[0];
	// console.log(menuSelected);

	return (
		<div>
			<div className='grid grid-cols-4 place-items-center'>
				{menuList.map((m) => (
					<div key={m.id} className=''>
						<MenuType mType={m.type} onSelect={onSelect} />
						<div></div>
					</div>
				))}
			</div>
			<div>
				<Modal menuSelected={menuSelected} />
			</div>
		</div>
	);
};

// ('font-semibold capitalize cursor-pointer ');
