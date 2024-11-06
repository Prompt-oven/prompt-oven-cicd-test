export interface PromptDetailInfoType {
	productUUID: string
	thumbnailUrl: string
	productName: string
	productStar: number
	productReviewCount: number
	productRegistDate: string
	productPrice: number
	productDescription: string
	hashTag: string
	bio: string | undefined
	memberProfileImage: string | undefined
	memberNickname: string | undefined
	isCart: boolean
	isFavorite: boolean
}
