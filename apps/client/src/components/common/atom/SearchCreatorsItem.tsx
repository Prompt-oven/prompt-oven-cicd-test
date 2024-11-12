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
			className="flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-white"
			onClick={onClick}>
			<Image
				src={creator.thumbnail || "/placeholder.svg"}
				alt="creator's thumbnail"
				className="pointer-events-none rounded-full object-cover"
				width={48}
				height={48}
			/>
			<div className="pointer-events-none min-w-0 flex-1">
				<div className="text-muted-foreground pointer-events-none truncate text-left font-medium">
					{creator.nickname}
				</div>
				<div className="text-muted-foreground pointer-events-none flex items-center gap-2 text-sm">
					<span className="pointer-events-none font-medium">
						{creator.rank}
					</span>
					<span className="pointer-events-none flex items-center">
						<Star className="fill-primary pointer-events-none mr-1 h-3 w-3 fill-current" />
						{creator.rating}
					</span>
					<span>{creator.follower} followers</span>
				</div>
			</div>
		</button>
	)
}

export default SearchCreatorsItem
