import React from "react"

interface PromptDetailReviewCountProps {
	reviewCount: number
}

export default function PromptDetailReviewCount({
	reviewCount,
}: PromptDetailReviewCountProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<p className="text-4xl font-semibold">Prompt reviews</p>
			<p className="mx-6 text-base">
				<span>reviews : {reviewCount}</span>
			</p>
		</div>
	)
}
