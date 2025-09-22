"use client";

import * as React from "react";
import {
	AudioWaveform,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Calendar,
	Home,
	Inbox,
	Search,
	Settings,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import {
	DASHBOARD_ADD_CATEGORY,
	DASHBOARD_ADD_COUPONS,
	DASHBOARD_ADD_PRODUCTS,
	DASHBOARD_ADD_VARIANTS,
	DASHBOARD_ALL_CATEGORY,
	DASHBOARD_ALL_COUPONS,
	DASHBOARD_ALL_PRODUCTS,
	DASHBOARD_ALL_VARIANTS,
	DASHBOARD_CUSTOMERS,
	DASHBOARD_HOME,
	DASHBOARD_ORDERS,
	DASHBOARD_REVIEWS,
} from "@/routes/adminRoutes";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Godhaji",
			logo: "/assets/logo/logo-favicon-white.svg",
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: "/assets/logo/logo-favicon-white.svg",
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: "/assets/logo/logo-favicon-white.svg",
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "Dashboard",
			url: DASHBOARD_HOME,
			icon: Home,
			isActive: true,
		},
		{
			title: "Categories",
			url: "#",
			icon: Inbox,
			items: [
				{
					title: "Add Category",
					url: DASHBOARD_ADD_CATEGORY,
				},
				{
					title: "Manage Categories",
					url: DASHBOARD_ALL_CATEGORY,
					isActive: true,
				},
			],
		},
		{
			title: "Products",
			url: "#",
			icon: Calendar,
			items: [
				{
					title: "Add Product",
					url: DASHBOARD_ADD_PRODUCTS,
				},
				{
					title: "Add Variant",
					url: DASHBOARD_ADD_VARIANTS,
				},
				{
					title: "All Products",
					url: DASHBOARD_ALL_PRODUCTS,
				},
				{
					title: "All Variant",
					url: DASHBOARD_ALL_VARIANTS,
				},
			],
		},
		{
			title: "Coupons",
			url: "#",
			icon: Search,
			items: [
				{
					title: "Add Coupon",
					url: DASHBOARD_ADD_COUPONS,
				},
				{
					title: "Manage Coupons",
					url: DASHBOARD_ALL_COUPONS,
				},
			],
		},
		{
			title: "Orders",
			url: DASHBOARD_ORDERS,
			icon: Settings,
		},
		{
			title: "Customers",
			url: DASHBOARD_CUSTOMERS,
			icon: Settings,
		},
		{
			title: "Reviews & Ratings",
			url: DASHBOARD_REVIEWS,
			icon: Settings,
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Travel",
			url: "#",
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
