"use client";
import React from "react";
import { CircleUser, Search, ShoppingCart } from "lucide-react";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";
import { useAuth } from "@/providers/authProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createSupabaseClient } from "@/lib/supabase/client";
import { useUserData } from "@/hooks/useUserData";

export type NavLink = {
  href: string;
  label: string;
};

export type IconLink = {
  href: string;
  icon: React.ReactNode;
};

export type ProductLink = {
  title: string;
  href: string;
  description: string;
  // children: React.ReactNode;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/contact-us", label: "Contact Us" },
];

const iconLinks: IconLink[] = [
  { href: "/cart", icon: <Search key="search" /> },
  { href: "/cart", icon: <ShoppingCart key="cart" /> },
  // { href: "/auth/login", icon: <CircleUser key="user" /> },
];

const products: ProductLink[] = [
  {
    title: "Product 1",
    href: "/products/1",
    description: "Description for Product 1",
  },
  {
    title: "Product 2",
    href: "/products/2",
    description: "Description for Product 2",
  },
  {
    title: "Product 3",
    href: "/products/3",
    description: "Description for Product 3",
  },
];

const Navbar = () => {
  const { user, loading } = useAuth();
  const { data: userData, isLoading, error, refetch } = useUserData(user?.id);

  return (
    <nav className="fixed top-0 w-full z-[1000]">
      <div className="hidden lg:block">
        <DesktopNavbar
          navLinks={navLinks}
          iconLinks={iconLinks}
          ProductLinks={products}
          user={userData}
          loading={loading}
        />
      </div>
      <div className="lg:hidden">
        <MobileNavbar
          iconLinks={iconLinks}
          navLinks={navLinks}
          user={userData}
          loading={loading}
        />
      </div>
    </nav>
  );
};

export default Navbar;
