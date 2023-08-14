import { Header } from '@/components/header/Header';
import React from 'react';

export default function SobreNosotrosPage() {
	return (
		<div className='max-w-lg min-h-[75vh] mx-auto px-8  flex items-center text-slate-200'>
			<div>
				<div className='py-3'>
					<h1 className='text-lg'>Sobre Nosotros</h1>
				</div>
				<div>
					<p className='py-2'>
						En un rincón acogedor se encuentra{' '}
						<i>
							<span className='font-normal'>Indulge</span> Gastrobar & Lounge
						</i>{' '}
						, destacando por su énfasis en la calidad culinaria. Platos
						tradicionales, presentados con elegancia, reflejan su compromiso con
						ingredientes de primera categoría.
					</p>
					<p className='py-2'>
						El servicio, guiado por un camarero amable, complementa la
						experiencia gastronómica, asegurando que cada visita sea
						gratificante. Su espacio, íntimo y acogedor, incluye una terraza con
						toldo, aunque reservar previamente es aconsejable debido a su
						popularidad.
					</p>
					<p className='py-2'>
						En definitiva,{' '}
						<i>
							<span className='font-normal'>Indulge</span> Gastrobar & Lounge
						</i>{' '}
						ofrece más que una comida; es una experiencia que une la excelencia
						culinaria con un servicio atento en un ambiente encantador.
					</p>
				</div>
			</div>
		</div>
	);
}
