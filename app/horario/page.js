import { horarioData } from '../api/data';

export default async function HorarioPage() {
	const horario = horarioData;

	return (
		<div className='max-w-md mx-auto mt-8 text-slate-200'>
			<div className='flex flex-col px-8'>
				{horario.map((h, index) => (
					<div key={index}>
						<div className='flex justify-between'>
							<div>{h.dia}</div>
							<div className='pb-3'>
								<div>{h.hora.almuerzo}</div>
								<div>{h.hora.cena}</div>
							</div>
						</div>
						<hr className='pb-4' />
					</div>
				))}
			</div>
		</div>
	);
}
