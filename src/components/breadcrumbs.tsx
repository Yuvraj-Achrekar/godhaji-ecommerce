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
import { Fragment } from "react";

const Breadcrumbs = () => {
	const pathname = usePathname();
	const routes = breadcrumbsRoutes(pathname);
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{routes.map((route, index) => {
					const isLast = index === routes.length - 1;

					return (
						<Fragment key={route.title + route.href}>
							{!isLast ? (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink asChild>
											<Link href={route.href}>{route.title}</Link>
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbItem>
									<BreadcrumbPage>{route.title}</BreadcrumbPage>
								</BreadcrumbItem>
							)}
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default Breadcrumbs;
