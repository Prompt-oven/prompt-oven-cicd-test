import React from "react"
import PromptThumbnail from "../../atom/promptlist/PromptThumbnail"
import PromptLLMLabel from "../../atom/promptlist/PromptLLMLabel"
import PromptTitle from "../../atom/promptlist/PromptTitle"
import PromptPrice from "../../atom/promptlist/PromptPrice"

interface PromptCardProps {
	title: string
	price: number
	model: string
	imageUrl: string
}

function PromptCard({ title, price, model, imageUrl }: PromptCardProps) {
	return (
		<div className="overflow-hidden rounded-lg bg-gray-800">
			<div className="relative">
				<PromptThumbnail imageUrl={imageUrl} title={title} />
				<PromptLLMLabel model={model} />
			</div>
			<div className="p-4">
				<PromptTitle title={title} />
				<PromptPrice price={price} />
			</div>
		</div>
	)
}

export default PromptCard
