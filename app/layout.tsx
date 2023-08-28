import './globals.css';
import type { Metadata } from 'next';
import Menu from '@/components/Menu/Menu';

export const metadata: Metadata = {
	title: 'Clash of Clans Enciclopedya',
	description: 'Detail collection of data about the Game for iOS and Android, Clash of Clans',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<aside>
					<Menu />
				</aside>
				{children}
			</body>
		</html>
	);
}
