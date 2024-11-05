"use client"

import { useState } from "react"
import { Button } from "@repo/ui/button"
import { ProfileFilterSearchInput } from "../molecules/ProfileFilterSearchInput"
import { ProfileFilterSection } from "../molecules/ProfileFilterSection"
import { ProfileFilterCategory } from "../molecules/ProfileFilterCategory"
import { ProfileFilterStatus } from "../molecules/ProfileFilterStatus"
import { ProfileFilterColor } from "../molecules/ProfileFilterColor"
import { ProfileFilterCollection } from "../molecules/ProfileFilterCollection"
import { ProfileFilterPrice } from "../molecules/ProfileFilterPrice"

export default function ProfileFilterSidebar() {
	const [filters, setFilters] = useState({
		search: "",
		category: "",
		status: [] as string[],
		currency: "ETH",
		minPrice: "",
		maxPrice: "",
		collection: "",
		colors: [] as string[],
	})

	const handleClear = () => {
		setFilters({
			search: "",
			category: "",
			status: [],
			currency: "ETH",
			minPrice: "",
			maxPrice: "",
			collection: "",
			colors: [],
		})
	}

	return (
		<div className="h-full w-1/4 rounded-lg bg-opacity-20 bg-gradient-to-r from-[#3F1C24] to-[#262038] p-4">
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
					currency={filters.currency}
					onCurrencyChange={(value) =>
						setFilters({ ...filters, currency: value })
					}
					minValue={filters.minPrice}
					maxValue={filters.maxPrice}
					onMinChange={(value) => setFilters({ ...filters, minPrice: value })}
					onMaxChange={(value) => setFilters({ ...filters, maxPrice: value })}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Collection">
				<ProfileFilterCollection
					value={filters.collection}
					onChange={(value) => setFilters({ ...filters, collection: value })}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Filter By Color">
				<ProfileFilterColor
					selected={filters.colors}
					onChange={(values) => setFilters({ ...filters, colors: values })}
				/>
			</ProfileFilterSection>

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
