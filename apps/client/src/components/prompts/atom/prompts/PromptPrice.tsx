import React from "react"

interface PromptPriceProps {
	price: number
}

function PromptPrice({ price }: PromptPriceProps) {
	return (
		<p className="text-sm text-gray-400">
			{price === 0 ? "Free" : `$${price}`}
		</p>
	)
}

export default PromptPrice
