import React from "react"

interface PromptPriceProps {
	productPrice: number
}

export default function PromptPrice({ productPrice }: PromptPriceProps) {
	return (
		<p className="font-lato bottom-2 text-balance pr-2 text-white">
			{productPrice.toLocaleString()}$
		</p>
	)
}
