export default async function getMenu() {
	const res = await fetch('http://127.0.0.1:3000/api/menu');
	const data = res.json();
	console.log(data);
	return data;
}
