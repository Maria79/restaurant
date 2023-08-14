export default async function getMenu() {
	const res = await fetch('http://localhost:3000/api/menu');
	const data = res.json();
	console.log(data);
	return data;
}
