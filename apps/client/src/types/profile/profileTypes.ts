// No cache Data - Because it is data that needs to be reflected in real time.
export interface ReviewAndFollowType {
	memberUUID: string
	reviews: number
	following: number
	followers: number
}

// Cache Data
export interface ProfileInfoType {
	memberInfo: MemberInfoType
	favoriteList: ProfileListType[]
	registList: ProfileListType[]
}

export interface MemberInfoType {
	memberUUID: string
	banner?: string | undefined
	profileImage?: string | undefined
	nickname: string
	bio?: string | undefined
	xId?: string | undefined
	instagramId?: string | undefined
	youtubeHandle?: string | undefined
	webLink?: string | undefined
	allowMessage: boolean
	acceptCustom: boolean
}

export interface RegistProfileType {
	banner?: string | undefined
	profileImage?: string | undefined
	bio?: string | undefined
	xId?: string | undefined
	instagramId?: string | undefined
	youtubeHandle?: string | undefined
	webLink?: string | undefined
	allowMessage: boolean
	acceptCustom: boolean
}

export interface ProfileListType {
	productUUID: string
	thumbnailUrl: string
	categoryName: string
	productName: string
	productPrice: string
}
