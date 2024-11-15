import React from "react"
import { Skeleton } from "@repo/ui/skeleton"

function SearchDropDownSkeleton() {
	return (
		<div className="flex flex-col space-y-3 px-4">
			<Skeleton className="h-[125px] w-full rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	)
}

export default SearchDropDownSkeleton
