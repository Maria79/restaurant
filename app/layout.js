import { Hero } from '@/components/Hero';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Indulge Gastrobar',
	description: 'Indulge - Gastrobar & Lounge',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`z-0 ${inter.className}`}>
				<Header />
				<Hero />
				{children}
			</body>
		</html>
	);
}
