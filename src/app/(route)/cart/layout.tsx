import { StepFlow } from "@/components/cart/stepFlow";

export default function CartLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="pt-18">
			<StepFlow />
			{children}
		</main>
	);
}
