import React from "react"
import Image from "next/image"
import { Star } from "@repo/ui/lucide"
import type { SearchResultCreatorType } from "@/types/search/searchResultType"

function SearchCreatorsItem({
	creator,
	onClick,
}: {
	creator: SearchResultCreatorType
	onClick: () => void
}) {
	return (
		<button
			type="button"
			className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-lg p-2"
			onClick={onClick}>
			<Image
				src={creator.thumbnail || "/placeholder.svg"}
				alt="creator's thumbnail"
				className="rounded-full object-cover"
				width={48}
				height={48}
			/>
			<div className="min-w-0 flex-1">
				<div className="truncate font-medium">{creator.nickname}</div>
				<div className="text-muted-foreground flex items-center gap-2 text-sm">
					<span className="text-primary font-medium">{creator.rank}</span>
					<span className="flex items-center">
						<Star className="fill-primary text-primary mr-1 h-3 w-3" />
						{creator.rating}
					</span>
					<span>{creator.follower} followers</span>
				</div>
			</div>
		</button>
	)
}

export default SearchCreatorsItem
