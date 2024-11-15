"use client"

import { Button } from "@repo/ui/button"
import { useState } from "react"
import { ProfileFilterCategory } from "../molecules/ProfileFilterCategory"
import { ProfileFilterPrice } from "../molecules/ProfileFilterPrice"
import { ProfileFilterSearchInput } from "../molecules/ProfileFilterSearchInput"
import { ProfileFilterSection } from "../molecules/ProfileFilterSection"
import { ProfileFilterStatus } from "../molecules/ProfileFilterStatus"

export default function ProfileFilterSidebar() {
	const [filters, setFilters] = useState({
		search: "",
		category: "",
		status: [] as string[],
		minPrice: "",
		maxPrice: "",
		// colors: [] as string[],
	})

	const handleClear = () => {
		setFilters({
			search: "",
			category: "",
			status: [],
			minPrice: "",
			maxPrice: "",
			// colors: [],
		})
	}

	return (
		<div className="h-full w-full rounded-lg bg-opacity-20 bg-gradient-to-r from-[#3F1C24] to-[#262038] p-4 sm:max-w-[200px]">
			<h2 className="mb-4 font-medium text-white">FILTER BY</h2>

			<ProfileFilterSearchInput
				value={filters.search}
				onChange={(value) => setFilters({ ...filters, search: value })}
			/>

			<ProfileFilterSection title="Category">
				<ProfileFilterCategory
					value={filters.category}
					onChange={(value) => setFilters({ ...filters, category: value })}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Status">
				<ProfileFilterStatus
					values={filters.status}
					onChange={(values) => setFilters({ ...filters, status: values })}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Price">
				<ProfileFilterPrice
					minValue={filters.minPrice}
					maxValue={filters.maxPrice}
					onMinChange={(value) => setFilters({ ...filters, minPrice: value })}
					onMaxChange={(value) => setFilters({ ...filters, maxPrice: value })}
				/>
			</ProfileFilterSection>

			{/* <ProfileFilterSection title="Filter By Color">
				<ProfileFilterColor
					selected={filters.colors}
					onChange={(values) => setFilters({ ...filters, colors: values })}
				/>
			</ProfileFilterSection> */}

			<div className="mt-4 flex gap-2">
				<Button
					variant="secondary"
					className="flex-1 bg-[#35314D] text-white hover:bg-[#35314D]/90"
					onClick={handleClear}>
					Clear
				</Button>
				<Button className="flex-1 bg-[#F24E1E] text-white hover:bg-[#F24E1E]/90">
					Apply
				</Button>
			</div>
		</div>
	)
}
