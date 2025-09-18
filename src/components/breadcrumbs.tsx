"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbsRoutes } from "@/lib/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
	title: string;
	href: string;
};

const Breadcrumbs = () => {
	const pathname = usePathname();
	const routes = breadcrumbsRoutes(pathname);
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{routes.map((route, index) => {
					const isLast = index === routes.length - 1;

					return (
						<>
							{!isLast ? (
								<>
									<BreadcrumbItem key={route.title + route.href}>
										<BreadcrumbLink asChild>
											<Link href={route.href}>{route.title}</Link>
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbItem key={route.title + route.href}>
									<BreadcrumbPage>{route.title}</BreadcrumbPage>
								</BreadcrumbItem>
							)}
						</>
					);
				})}
				{/* <BreadcrumbItem className="hidden md:block">
					<BreadcrumbLink href={DASHBOARD_HOME}>Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden md:block" />
				<BreadcrumbItem>
					<BreadcrumbPage>Data Fetching</BreadcrumbPage>
				</BreadcrumbItem> */}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default Breadcrumbs;
