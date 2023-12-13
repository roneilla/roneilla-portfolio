import Nav from '@/components/Nav';
import './globals.css';
import type { Metadata } from 'next';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: 'Roneilla Bumanlag - Interaction Designer',
	description:
		'Roneilla Bumanlag is an interaction designer and creative developer based in Toronto.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`body`}>
				<Loader />

				<div className="page">
					<Nav />
					<div className="container">{children}</div>
				</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
