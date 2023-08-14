import React from 'react';

export default function MenuType({ mType, onSelect }) {
	return (
		<div
			className='font-semibold capitalize cursor-pointer px-5 py-3 hover:bg-slate-700'
			onClick={() => onSelect(mType)}
		>
			{mType}
		</div>
	);
}
