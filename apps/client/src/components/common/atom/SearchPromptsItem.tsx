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
			className="flex w-full cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-white"
			onClick={onClick}>
			<Image
				src={prompt.thumbnail || "/placeholder.svg"}
				alt="prompt thumbnail"
				className="rounded border border-[#424242] object-cover"
				width={64}
				height={64}
			/>
			<div className="text-muted-foreground flex min-w-0 flex-col items-start justify-between truncate">
				<div className="text-muted-foreground truncate font-medium">
					{prompt.title}
				</div>
				<div className="text-muted-foreground text-sm">{prompt.model}</div>
				<div className="text-muted-foreground flex items-center gap-4 text-sm">
					<span className="flex items-center">
						<Star className="text-muted-foreground mr-1 h-3 w-3 fill-current" />
						{prompt.rating}
					</span>
					<span className="text-muted-foreground ml-auto font-medium">
						$ {prompt.price}
					</span>
				</div>
			</div>
		</button>
	)
}

export default SearchPromptsItem
