export default async function getHorario() {
	const res = await fetch('http://localhost:3000/api/horario');
	const data = res.json();

	return data;
}
