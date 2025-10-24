"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
}

const CartPage = () => {
	const steps = [
		{ number: "01", label: "Cart" },
		{ number: "02", label: "Address" },
		{ number: "03", label: "Payment" },
	];

	const [items, setItems] = useState<CartItem[]>([
		{
			id: 1,
			name: "Amla Pickle",
			price: 100,
			quantity: 5,
			image: "/assets/product/1.jpg",
		},
		{
			id: 2,
			name: "Amla Pickle",
			price: 100,
			quantity: 5,
			image: "/assets/product/1.jpg",
		},
		{
			id: 3,
			name: "Amla Pickle",
			price: 100,
			quantity: 5,
			image: "/assets/product/1.jpg",
		},
		{
			id: 4,
			name: "Amla Pickle",
			price: 100,
			quantity: 5,
			image: "/assets/product/1.jpg",
		},
	]);

	const updateQuantity = (id: number, delta: number) => {
		setItems(
			items.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item
			)
		);
	};

	const removeItem = (id: number) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	return (
		<section className="">
			{/* <div className="bg-gray-400 h-12" /> */}
			<div className="flex flex-col max-w-7xl gap-10 mx-auto  px-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2">
						<div className="flex items-center justify-between mb-6">
							<h1 className="text-3xl font-semibold text-[#1a1a1a]">My Cart</h1>
							<a href="#" className="text-[#9b4f2e] text-sm hover:underline">
								+ Add from Wishlist
							</a>
						</div>

						{/* Table Header */}
						<div className="grid grid-cols-5 gap-4 mb-4 pb-4 border-b border-[#e9e9e9]">
							<div className="text-xs font-semibold text-[#656565] uppercase">
								Product
							</div>
							<div className="text-xs font-semibold text-[#656565] uppercase">
								Price
							</div>
							<div className="text-xs font-semibold text-[#656565] uppercase">
								Quantity
							</div>
							<div className="text-xs font-semibold text-[#656565] uppercase">
								Subtotal
							</div>
							<div />
						</div>

						{/* Cart Items */}
						<div className="space-y-4">
							{items.map((item) => (
								<div
									key={item.id}
									className="grid grid-cols-5 gap-4 items-center pb-4 border-b border-[#e9e9e9]">
									{/* Product */}
									<div className="flex items-center gap-3">
										<img
											src={item.image || "/placeholder.svg"}
											alt={item.name}
											className="w-16 h-16 object-cover rounded bg-[#f2f2f2]"
										/>
										<span className="text-sm text-[#1a1a1a]">{item.name}</span>
									</div>

									{/* Price */}
									<div className="text-sm text-[#1a1a1a]">Rs.{item.price}</div>

									{/* Quantity */}
									<div className="flex items-center gap-2">
										<button
											onClick={() => updateQuantity(item.id, -1)}
											className="text-[#656565] hover:text-[#1a1a1a]">
											<Minus size={16} />
										</button>
										<span className="text-sm text-[#1a1a1a] w-6 text-center">
											{item.quantity}
										</span>
										<button
											onClick={() => updateQuantity(item.id, 1)}
											className="text-[#656565] hover:text-[#1a1a1a]">
											<Plus size={16} />
										</button>
									</div>

									{/* Subtotal */}
									<div className="text-sm text-[#1a1a1a]">
										Rs.{item.price * item.quantity}
									</div>

									{/* Remove */}
									<button
										onClick={() => removeItem(item.id)}
										className="text-[#818181] hover:text-[#9b4f2e] transition">
										<Trash2 size={18} />
									</button>
								</div>
							))}
						</div>

						{/* Clear Cart */}
						<div className="mt-6 text-right">
							<a href="#" className="text-[#9b4f2e] text-sm hover:underline">
								Clear Cart
							</a>
						</div>
					</div>

					{/* Order Summary */}
					<div className="fixed bottom-0 w-full left-0 bg-white lg:col-span-1 md:relative">
						{/* Coupon Section */}
						<div className="mb-8">
							<h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
								Have a coupon?
							</h3>
							<p className="text-sm text-[#656565] mb-4">
								Add your code for an instant cart discount
							</p>
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Coupon Code"
									className="flex-1 px-4 py-2 border border-[#e9e9e9] rounded text-sm text-[#1a1a1a] placeholder-[#818181]"
								/>
								<button className="px-6 py-2 text-[#9b4f2e] font-semibold text-sm hover:bg-[#f2f2f2] transition rounded">
									Apply
								</button>
							</div>
						</div>

						{/* Cart Total */}
						<div className="bg-[#f2f2f2] rounded-lg p-6">
							<h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">
								Cart Total
							</h3>

							<div className="space-y-3 mb-6">
								<div className="flex justify-between text-sm">
									<span className="text-[#656565]">Subtotal:</span>
									<span className="text-[#1a1a1a] font-semibold">
										Rs.{subtotal}
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-[#656565]">Shipping:</span>
									<span className="text-[#1a1a1a] font-semibold">Free</span>
								</div>
								<div className="border-t border-[#e9e9e9] pt-3 flex justify-between">
									<span className="text-[#1a1a1a] font-semibold">Total:</span>
									<span className="text-[#1a1a1a] font-bold text-lg">
										Rs.{subtotal}
									</span>
								</div>
							</div>

							<button className="w-full bg-[#9b4f2e] text-white py-3 rounded-lg font-semibold hover:bg-[#8a4424] transition">
								Proceed to Shipping
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartPage;
