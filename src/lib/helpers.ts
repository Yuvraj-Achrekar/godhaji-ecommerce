export const breadcrumbsRoutes = (route: string) => {
	switch (route) {
		case "/admin/dashboard":
			return [
				{
					title: "Dashboard",
					href: "/admin/dashboard",
				},
			];
		case "/admin/dashboard/products/add":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Products", href: "/admin/dashboard/products" },
				{ title: "add", href: "/admin/dashboard/products/add" },
			];
		default:
			return [
				{
					title: "Set the breadcrumb routes",
					href: "/admin/dashboard",
				},
			];
	}
};
