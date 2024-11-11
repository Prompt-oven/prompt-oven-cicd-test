import React from "react"
import Image from "next/image"
import { Star } from "@repo/ui/lucide"
import type { SearchResultPromptType } from "@/types/search/searchResultType"

function SearchPromptsItem({
	prompt,
	onClick,
}: {
	prompt: SearchResultPromptType
	onClick: () => void
}) {
	return (
		<button
			type="button"
			className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-lg p-2"
			onClick={onClick}>
			<Image
				src={prompt.thumbnail || "/placeholder.svg"}
				alt="prompt thumbnail"
				className="rounded object-cover"
				width={64}
				height={64}
			/>
			<div className="min-w-0 flex-1">
				<div className="truncate font-medium">{prompt.title}</div>
				<div className="text-muted-foreground flex items-center gap-2 text-sm">
					{prompt.model}
					<span className="flex items-center">
						<Star className="fill-primary text-primary mr-1 h-3 w-3" />
						{prompt.rating}
					</span>
				</div>
			</div>
			<div className="text-sm font-medium">${prompt.price}</div>
		</button>
	)
}

export default SearchPromptsItem
