"use client";

import * as React from "react";
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
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

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveform,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: Command,
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "Dashboard",
			url: "#",
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
					url: "#",
				},
				{
					title: "Manage Categories",
					url: "#",
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
					url: "#",
				},
				{
					title: "Add Variant",
					url: "#",
				},
				{
					title: "All Products",
					url: "#",
				},
				{
					title: "All Variant",
					url: "#",
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
					url: "#",
				},
				{
					title: "Manage Coupons",
					url: "#",
				},
			],
		},
		{
			title: "Orders",
			url: "#",
			icon: Settings,
		},
		{
			title: "Customers",
			url: "#",
			icon: Settings,
		},
		{
			title: "Reviews & Ratings",
			url: "#",
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
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
