"use client";
import { useState } from "react";

export const StepFlow = () => {
	const steps = [
		{ id: 1, label: "Cart" },
		{ id: 2, label: "Address" },
		{ id: 3, label: "Payment" },
	];

	const [currentStep, setCurrentStep] = useState(2);
	return (
		<div className="flex items-center justify-center gap-2 py-4 sm:gap-4 sm:py-6 md:gap-8 md:py-8">
			{steps.map((step, index) => (
				<div
					key={step.id}
					className="flex items-center gap-2 sm:gap-4 md:gap-8">
					{/* Step Circle */}
					<div className="flex flex-col items-center gap-1 sm:gap-2">
						<div
							className={`flex h-8 w-8 items-center justify-center rounded-full border-2 font-semibold transition-all sm:h-10 sm:w-10 md:h-12 md:w-12 ${
								index < currentStep
									? "border-amber-700 bg-amber-700 text-white"
									: "border-amber-700 bg-white text-amber-700"
							}`}>
							<span className="text-xs sm:text-sm md:text-base">
								{String(index + 1).padStart(2, "0")}
							</span>
						</div>
						<span
							className={`text-xs sm:text-sm font-medium ${
								index < currentStep ? "text-amber-700" : "text-gray-600"
							}`}>
							{step.label}
						</span>
					</div>

					{/* Connector Line */}
					{index < steps.length - 1 && (
						<div
							className={`h-0.5 w-8 transition-all sm:h-1 sm:w-16 md:w-24 ${
								index < currentStep - 1 ? "bg-amber-700" : "bg-gray-300"
							}`}
						/>
					)}
				</div>
			))}
		</div>
	);
};
