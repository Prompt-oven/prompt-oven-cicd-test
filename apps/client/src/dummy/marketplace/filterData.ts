import { FilterData, ActiveFilter } from "@/types/marketplace/marketPlaceType"

const initialFilters: FilterData = {
	product: ["Prompts", "Apps"],
	type: ["Image"],
	sortBy: ["Trending"],
	model: ["DALL-E"],
}

const initialActiveFilters: ActiveFilter[] = [
	{ key: "product", value: "Prompts" },
	{ key: "type", value: "Image" },
	{ key: "sortBy", value: "Trending" },
	{ key: "model", value: "DALL-E" },
]
