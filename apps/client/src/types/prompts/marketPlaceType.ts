// 프롬프트

export interface PromptDescriptionType {
	type: "image" | "text"
	content: string | string[]
}

export interface PromptType {
	id: string
	liked?: boolean
	imageUrl: string
	title: string
	model: string
	price: number
	inCart?: boolean
	example: PromptDescriptionType[]
}

export interface FilterOptionType {
	title: string
	options: string[]
	selectedOptions: string[]
	onChange: (option: string, checked: boolean) => void
}

// 필터

export type FilterKeys = "product" | "type" | "sortBy" | "model"

export interface FilterData {
	product: string[]
	type: string[]
	sortBy: string[]
	model: string[]
}

export interface ActiveFilter {
	key: FilterKeys
	value: string
}
