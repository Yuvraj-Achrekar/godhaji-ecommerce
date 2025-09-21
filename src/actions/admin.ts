"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";

export const getDashboardData = async () => {};
export const getLatestOrders = async () => {};
export const getLatestReviews = async () => {};
export const getOrderSummary = async () => {};
export const getOrderChart = async () => {};
export const getCountOverview = async () => {};

export const getAllCustomers = async () => {
    const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("user_role", "user"); // assuming you differentiate users with this field

  if (error) {
    console.error("Error fetching customers:", error);
    throw new Error(error.message);
  }

  return data; // returns array of customers
  };
