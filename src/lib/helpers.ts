import { toast } from "sonner";

export const breadcrumbsRoutes = (route: string) => {
	switch (route) {
		case "/admin/dashboard":
			return [
				{
					title: "Dashboard",
					href: "/admin/dashboard",
				},
			];
		case "/admin/dashboard/categories":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Categories", href: "/admin/dashboard/categories" },
			];
		case "/admin/dashboard/categories/add":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Categories", href: "/admin/dashboard/categories" },
				{ title: "Add Category", href: "/admin/dashboard/categories/add" },
			];
		case "/admin/dashboard/products/add-product":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Products", href: "/admin/dashboard/products" },
				{ title: "Add Product", href: "/admin/dashboard/products/add-product" },
			];
		case "/admin/dashboard/products/add-variant":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Products", href: "/admin/dashboard/products" },
				{ title: "Add Variant", href: "/admin/dashboard/products/add-variant" },
			];
		case "/admin/dashboard/products":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Products", href: "/admin/dashboard/products" },
			];
		case "/admin/dashboard/products/all-variants":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Products", href: "/admin/dashboard/products" },
				{ title: "All Variants", href: "/admin/dashboard/products/all-variants" },
			];
		case "/admin/dashboard/coupons/add":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Coupons", href: "/admin/dashboard/coupons" },
				{ title: "Add Coupons", href: "/admin/dashboard/coupons/add" },
			];
		case "/admin/dashboard/coupons":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Coupons", href: "/admin/dashboard/coupons" },
			];
		case "/admin/dashboard/customers":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Customers", href: "/admin/dashboard/customers" },
			];
		case "/admin/dashboard/orders":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Orders", href: "/admin/dashboard/orders" },
			];
		case "/admin/dashboard/reviews":
			return [
				{ title: "Dashboard", href: "/admin/dashboard" },
				{ title: "Reviews & Ratings", href: "/admin/dashboard/reviews" },
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



export const calculateDiscount = (maxPrice:number,offeredPrice:number):number => {
	return Number(((maxPrice - offeredPrice) * 100 / maxPrice).toFixed(0));
}

export const handleCopyLink = async () => {
	if (typeof window === "undefined") return; // do not run on the server
		const url = window.location.href; 
		try {
			// ✅ Modern API (works on most modern mobile browsers)
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(url);
				toast.success("Link copied to clipboard!");
				return;
			}

			// ✅ Fallback for Safari / older browsers
			const textArea = document.createElement("textarea");
			textArea.value = url;
			textArea.style.position = "fixed"; // avoid scrolling to bottom
			textArea.style.opacity = "0";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);
			toast.success("Link copied to clipboard!");
		} catch (err) {
			console.error("Failed to copy:", err);
			toast.error("Could not copy link. Please copy manually.");
		}
	};