// components/StarRatingLucide.jsx
"use client";

import { Star } from "lucide-react";
import { CSSProperties } from "react";

type StarRatingProps = {
	rating: number;
	totalStars?: number;
	size?: number;
};

export default function StarRating({
	rating,
	totalStars = 5,
	size = 18,
}: StarRatingProps) {
	const starArray = Array.from({ length: totalStars });

	const wrapperStyle: CSSProperties = {
		display: "inline-flex",
		gap: 0,
		alignItems: "center",
		lineHeight: 0,
	};

	const cellStyle: CSSProperties = {
		position: "relative",
		width: `${size}px`,
		height: `${size}px`,
		display: "inline-block",
	};

	const svgStyle: CSSProperties = {
		display: "block",
		width: "100%",
		height: "100%",
	};

	return (
		<div style={wrapperStyle} aria-hidden>
			{starArray.map((_, i) => {
				// i is 0..totalStars-1, star index visual is i+1
				const starIndex = i + 1;
				const rawFill = Math.max(0, Math.min(1, rating - (starIndex - 1))); // between 0..1
				const fillPercent = Math.round(rawFill * 10000) / 100; // keep 2 decimals

				// clip path for left->right fill. inset(top right bottom left)
				const clip = `inset(0 ${100 - fillPercent}% 0 0)`;

				return (
					<span key={i} style={cellStyle}>
						{/* Background empty star */}
						<Star
							style={svgStyle}
							strokeWidth={1.5}
							color="#e6e6e6"
							fill="none"
						/>

						{/* Filled overlay for this star - clipped to partial width */}
						<span
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								overflow: "hidden",
								// clip the filled star to represent fractional fill
								clipPath: clip,
								WebkitClipPath: clip,
								pointerEvents: "none",
							}}>
							<Star
								style={svgStyle}
								strokeWidth={1.5}
								color="#f6c948"
								fill="#f6c948"
							/>
						</span>
					</span>
				);
			})}
		</div>
	);
}
