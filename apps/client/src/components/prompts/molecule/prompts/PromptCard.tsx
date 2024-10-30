import React from "react"
import PromptThumbnail from "../../atom/prompts/PromptThumbnail"
import PromptLLMLabel from "../../atom/prompts/PromptLLMLabel"
import PromptTitle from "../../atom/prompts/PromptTitle"
import PromptPrice from "../../atom/prompts/PromptPrice"

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
