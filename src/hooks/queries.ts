import { createSupabaseClient } from "@/lib/supabase/client";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type ProductWithVariantsAndImages = Awaited<ReturnType<typeof fetchAllProducts>>[number];

const supabase = createSupabaseClient();
const fetchAllProducts = async ()=> {

    const { data, error } = await supabase
        .from("products")
        .select(`
            name,
            slug,
            category_name:category_id(name),
            average_rating,
            total_reviews,
            product_variants!inner(
                name,
                mrp,
                selling_price
            ),
            product_images!inner(
                image_url
            )
            `)
        .eq("product_variants.is_default", true)
        .eq("product_images.is_primary", true);
    if (error) {
        throw new Error(`Failed to fetch all products: ${error.message}`);
    }

    return data;
};

export const useAllProducts = () => {
    return useQuery({
        queryKey: ["all-products"],
        queryFn: () => fetchAllProducts(),
        retry: (failureCount, error) => {
            // Don't retry if it's a "not found" error
            if (error.message.includes("No rows")) return false;
            return failureCount < 2;
        },
    });
};


export type ProductInfoWithSlug = Awaited<ReturnType<typeof fetchProductBySlug>>;
const fetchProductBySlug = async (productSlug: string )=> {
    const { data, error } = await supabase
        .from("products")
        .select(`
            *,
            category_name:category_id(name),
            product_variants!inner(*),
            product_images!inner(
            image_url,
            is_primary
            )
            `)
        .eq("slug", productSlug)
        .order("is_primary", { 
            referencedTable: "product_images", 
            ascending: false, 
    }).single();
    if (error) {
        throw new Error(`Failed to fetch product details: ${error.message}`);
    }

    return data;
};

export const useProductBySlug = (productSlug: string | undefined) => {
    return useQuery({
        queryKey: ["product-details",productSlug],
        queryFn: () => fetchProductBySlug(productSlug!),
        enabled: !!productSlug,  // only run when product slug exist
        retry: (failureCount, error) => {
            // Don't retry if it's a "not found" error
            if (error.message.includes("No rows")) return false;
            return failureCount < 2;
        },
    });
};

export type CategoriesWithImages = Awaited<ReturnType<typeof fetchCategories>>[number];
const fetchCategories = async ()=> {
    const { data, error } = await supabase
        .from("categories")
        .select("*");
        
    if (error) {
        throw new Error(`Failed to fetch Categories details: ${error.message}`);
    }

    return data;
};

export const useCategories = () => {
    return useQuery({
        queryKey: ["cateogries"],
        queryFn: () => fetchCategories(),
        retry: (failureCount, error) => {
            // Don't retry if it's a "not found" error
            if (error.message.includes("No rows")) return false;
            return failureCount < 2;
        },
    });
};