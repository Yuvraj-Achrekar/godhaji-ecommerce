export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			This is for admin
			{children}
		</main>
	);
}
