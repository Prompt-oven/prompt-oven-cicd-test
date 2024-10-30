import React from "react"
import FilterGroup from "../molecule/filtering/FilterGroup"
import { Button } from "@repo/ui/button"
import { X } from "@repo/ui/lucide"

interface FilterSideBarProps {
	filters: {
		product: string[]
		type: string[]
		sortBy: string[]
		model: string[]
	}
	setFilters: React.Dispatch<
		React.SetStateAction<{
			product: string[]
			type: string[]
			sortBy: string[]
			model: string[]
		}>
	>
	activeFilters: { key: string; value: string }[]
}

function FilterSideBar({
	filters,
	setFilters,
	activeFilters,
}: FilterSideBarProps) {
	type FilterKeys = "product" | "type" | "sortBy" | "model"

	const handleFilterChange = (
		group: FilterKeys,
		option: string,
		checked: boolean,
	) => {
		setFilters((prevFilters) => ({
			// 필터 추가/제거 역할
			...prevFilters,
			[group]: checked
				? [...prevFilters[group], option]
				: prevFilters[group].filter((item) => item !== option),
		}))
		;("")
	}

	return (
		<aside className="w-64 bg-gray-900 p-6">
			<div className="mb-4">
				{activeFilters.map(({ key, value }) => (
					<Button
						key={`${key}-${value}`}
						variant="secondary"
						size="sm"
						className="mb-2 mr-2"
						onClick={() => {
							setFilters((prev) => ({
								...prev,
								[key as FilterKeys]: prev[key as FilterKeys].filter(
									(item) => item !== value,
								),
							}))
						}}>
						{value}
						<X className="ml-2 h-4 w-4" />
					</Button>
				))}
			</div>
			<FilterGroup
				groupTitle="Product"
				filterOptions={["Prompts", "Bundles", "Apps"]}
				selectedOptions={filters.product}
				onChange={(option, checked) =>
					handleFilterChange("product", option, checked)
				}
			/>
			<FilterGroup
				groupTitle="Type"
				filterOptions={["All", "Image", "Text"]}
				selectedOptions={filters.type}
				onChange={(option, checked) =>
					handleFilterChange("type", option, checked)
				}
			/>
			<FilterGroup
				groupTitle="Sort by"
				filterOptions={["Trending", "Most Popular", "Newest"]}
				selectedOptions={filters.sortBy}
				onChange={(option, checked) =>
					handleFilterChange("sortBy", option, checked)
				}
			/>
			<FilterGroup
				groupTitle="Model"
				filterOptions={["All", "DALL-E", "Midjourney"]}
				selectedOptions={filters.model}
				onChange={(option, checked) =>
					handleFilterChange("model", option, checked)
				}
			/>
		</aside>
	)
}

export default FilterSideBar
