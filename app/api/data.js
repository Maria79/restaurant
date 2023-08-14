export const navItems = [
	{
		title: 'Horario',
		url: 'horario',
	},
	{
		title: 'Menu',
		url: 'menu',
	},
	{
		title: 'Sobre nosotros',
		url: 'sobre-nosotros',
	},
	{
		title: 'Contacto',
		url: 'contacto',
	},
];

export const menuData = [
	{
		id: 1,
		type: 'entrantes',
		platos: [
			{
				id: 1,
				name: 'Surtidos de quesos',
				price: '7.75',
			},
			{
				id: 2,
				name: 'Jamón ibérico.',
				price: '11.50',
			},
			{
				id: 3,
				name: 'Pata asada de cochino negro.',
				price: '9.95',
			},
			{
				id: 4,
				name: 'Croquetas del abad (6 unidades) con papas fritas.',
				price: '8.25',
			},
			{
				id: 5,
				name: 'Fabadas típicas asturianas o sobrasadas con conejo (según semana).',
				price: '7.25',
			},
			{
				id: 6,
				name: 'Revuelto de morcilla canaria, cebolla caramelizada, pimientos de piquillo.',
				price: '9.50',
			},
			{
				id: 7,
				name: 'Revuelto de salmón. ',
				price: '9.25',
			},
			{
				id: 8,
				name: 'Revuelto de setas de temporada.',
				price: ' 8.50',
			},
			{
				id: 9,
				name: 'Huevos rotos a la abadía (huevos, papas, chorizo, cebolla caramelizada).',
				price: '10.95',
			},
			{
				id: 10,
				name: 'Boletus al ajillo.',
				price: '8.95',
			},
			{
				id: 11,
				name: 'Brochetas de verduras (2 unidades) o escalibada de verduras.',
				price: '6.95',
			},
			{
				id: 12,
				name: 'Papas rellenas de conejo en salmorejo.',
				price: '8.95',
			},
		],
	},
	{
		id: 2,
		type: 'ensaladas',
		platos: [
			{
				id: 1,
				name: 'Monje (tomates, aguacates y aliño de albahaca).',
				price: '8.95',
			},
			{
				id: 2,
				name: 'Prior (lechuga, tiras de pollo rebozado con copos de maíz, manzana, cebolla de guayonje, tomates cherry, aceitunas negras, salsa griega).',
				price: '9.95',
			},
			{
				id: 3,
				name: 'Carpaccio abad (calabacín, tomate, pistachos, rulo de cabra, rúcula, tosta de eneldo, parmesano rallado y jamón ibérico con aliño de hierbas del huerto).',
				price: '11.75',
			},
		],
	},
	{
		id: 3,
		type: 'carnes',
		platos: [
			{
				id: 1,
				name: 'Lágrimas de pollo rebozadas en copos de maíz, con papas fritas.',
				price: '8.75',
			},
			{
				id: 2,
				name: 'Chuleta de cochino negro con papas fritas.',
				price: '13.50',
			},
			{
				id: 3,
				name: 'Solomillo de cochino negro relleno de queso ahumado y con salsa de frutas (según temporada) sobre cama de papas.',
				price: "1'",
			},
			{
				id: 4,
				name: 'Carne de hamburguesa de ternera Angus con papas y ensalada.',
				price: '11.75',
			},
			{
				id: 5,
				name: 'Solomillo de ternera gallega con guarnición.',
				price: '16.95',
			},
			{
				id: 6,
				name: 'Pluma ibérica con guarnición.',
				price: '15.90,',
			},
			{
				id: 7,
				name: 'Chuletón de rubia gallega (bajo encargo).',
				price: '55',
			},
		],
	},
	{
		id: 4,
		type: 'guisos',
		platos: [
			{
				id: 1,
				name: 'Albóndigas de rabo con papas fritas.',
				price: '12.95',
			},
			{
				id: 2,
				name: 'Carrillera ibérica al vino tinto.',
				price: '12.95',
			},
			{
				id: 3,
				name: 'Estofado de ternera a la jardinera.',
				price: '12.75',
			},
		],
	},
	{
		id: 5,
		type: 'pescados',
		platos: [
			{
				id: 1,
				name: 'Salmón con alioli de millo y aliño de cebolla, sobre cama de batata y espárragos trigueros.',
				price: '15.95',
			},
			{
				id: 2,
				name: 'Bacalao a la brasa.',
				price: '15.95',
			},
			{
				id: 3,
				name: 'Calamares en salsa americana con papas fritas.',
				price: '14.95',
			},
		],
	},
	{
		id: 6,
		type: 'vegan',
		platos: [
			{
				id: 1,
				name: 'Tofu a la plancha con puré de papas.',
				price: '11.95',
			},
		],
	},
	{
		id: 7,
		type: 'postres',
		platos: [
			{
				id: 1,
				name: 'Helado de arroz con leche.',
				price: '4.50',
			},
			{
				id: 2,
				name: 'Torrija con helado.',
				price: '4.50',
			},
			{
				id: 3,
				name: 'Cremoso de chocolate La Candelaria en sopa de leche de cabra.',
				price: '5',
			},
			{
				id: 4,
				name: 'Tarta del día.',
				price: '4.75',
			},
			{
				id: 5,
				name: 'Coulant de chocolate con helado.',
				price: '4.85',
			},
		],
	},
];

export const horarioData = [
	{
		dia: 'lunes',
		hora: {
			almuerzo: 'Cerrado',
			cena: '',
		},
	},
	{
		dia: 'martes',

		hora: {
			almuerzo: '13:00-17:00',
			cena: '20:00-23:00',
		},
	},
	{
		dia: 'miércoles',

		hora: {
			amuerzo: '13:00-17:00',
			cena: '20:00-23:00',
		},
	},
	{
		dia: 'jueves',
		hora: {
			almuerzo: '13:00-17:00',
			cena: '20:00-23:00',
		},
	},
	{
		dia: 'viernes',
		hora: {
			almuerzo: '13:00-17:00',
			cena: '20:00-23:00',
		},
	},
	{
		dia: 'sábado',
		hora: {
			almuerzo: '13:00-17:00',
			cena: '20:00-23:00',
		},
	},
	{
		dia: 'domingo',
		hora: {
			almuerzo: '13:00-18:00',
			cena: '',
		},
	},
];
