import React from 'react';

export const Modal = ({ menuSelected }) => {
	const platos = menuSelected.platos;

	return (
		<div className='mt-5 px-3'>
			<div className=' leading-relaxed'>
				{platos.map((plato) => (
					<div key={plato.id}>
						<div className='flex'>
							<span className='mr-2'>-</span>
							<p>{plato.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
