export default async function getHorario() {
	const res = await fetch('http://127.0.0.1:3000/api/horario');
	const data = res.json();

	return data;
}
