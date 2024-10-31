"use client"

import { useState } from "react"
import { Badge } from "@repo/ui/badge"
import { Button } from "@repo/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@repo/ui/select"
import { X } from "@repo/ui/lucide"

export default function ProfileItemFilter() {
	const [selectedFilters, setSelectedFilters] = useState<string[]>([
		"In Auction",
	])

	const handleClearAll = () => {
		setSelectedFilters([])
	}

	const handleRemoveFilter = (filter: string) => {
		setSelectedFilters(selectedFilters.filter((f) => f !== filter))
	}

	return (
		<div className="flex h-[60px] w-full max-w-[1130px] items-center justify-between rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4">
			{/* Left Section */}
			<div className="flex items-center gap-4">
				<span className="font-mulish text-sm text-white">29064886 Results</span>

				<div className="flex items-center gap-2">
					{selectedFilters.map((filter) => (
						<Badge
							key={filter}
							variant="secondary"
							className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white">
							{filter}
							<button
								type="button"
								onClick={() => handleRemoveFilter(filter)}
								className="opacity-50 transition-opacity hover:opacity-100">
								<X className="h-4 w-4" />
							</button>
						</Badge>
					))}

					{selectedFilters.length > 0 && (
						<Button
							variant="link"
							onClick={handleClearAll}
							className="font-mulish px-0 text-sm text-[#2CC8F6] hover:text-[#2CC8F6]/80">
							Clear All
						</Button>
					)}
				</div>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="font-mulish h-[35px] w-[129px] rounded-full border border-white/20 bg-transparent text-white">
						<SelectValue placeholder="Sort By" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="price-asc">Price: Low to High</SelectItem>
						<SelectItem value="price-desc">Price: High to Low</SelectItem>
						<SelectItem value="date">Date Added</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className="font-mulish h-[35px] w-[129px] rounded-full border border-white/20 bg-transparent text-white">
						<SelectValue placeholder="Likes" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="most">Most Liked</SelectItem>
						<SelectItem value="least">Least Liked</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
