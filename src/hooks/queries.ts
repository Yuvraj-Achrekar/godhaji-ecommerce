import { createSupabaseClient } from "@/lib/supabase/client";
import { Tables } from "@/types/database.types";
import { useQuery } from "@tanstack/react-query";

export type ProductWithVariantsAndImages = Awaited<ReturnType<typeof fetchAllProducts>>[number];

const fetchAllProducts = async ()=> {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from("products")
        .select(`
            name,
            slug,
            category_name:category_id(name),
            average_rating,
            total_reviews,
            product_variants!inner(
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
        throw new Error(`Failed to fetch user profile: ${error.message}`);
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