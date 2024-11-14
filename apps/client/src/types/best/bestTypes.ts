export interface BestCreatorDataTypes {
	id: number
	name: string
	rank: number
	rankChange: number
	image: string
}

export interface BestCreatorCursorListTypes {
	data: BestCreatorDataTypes[]
	nextCursor: string | null // 다음 페이지가 없으면 null
	hasNextPage: boolean
}
