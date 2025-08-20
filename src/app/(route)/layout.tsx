import Navbar from "@/components/navbar/navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="h-screen relative">
			<Navbar />
			{children}
		</main>
	);
}
