import React from "react"

interface PromptPriceProps {
	productPrice: number
}

export default function PromptPrice({ productPrice }: PromptPriceProps) {
	return (
		<p className="font-lato pr-2 text-sm text-white">
			{productPrice.toLocaleString()}$
		</p>
	)
}
