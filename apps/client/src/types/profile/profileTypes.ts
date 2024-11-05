export interface ProfileMemberInfoType {
	memberUUID: string
	bannerImageUrl?: string | undefined
	avatarImageUrl?: string | undefined
	nickname: string
	email?: string | undefined
	joined: string
	following: number
	follower: number
	viewer: number
	sales: number
}

export interface ProfileListCardType {
	productUUID: string
	thumbnailUrl: string
	productName: string
	categoryName: string
	productStar: number
	productPrice: number
	productRegistDate: string
}
