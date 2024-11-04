import type { FilterData, ActiveFilter } from "@/types/prompts/marketPlaceType"

export const initialFilters: FilterData = {
	product: ["Prompts", "Apps"],
	type: ["Image"],
	sortBy: ["Trending"],
	model: ["DALL-E"],
}

export const initialActiveFilters: ActiveFilter[] = [
	{ key: "product", value: "Prompts" },
	{ key: "type", value: "Image" },
	{ key: "sortBy", value: "Trending" },
	{ key: "model", value: "DALL-E" },
]
