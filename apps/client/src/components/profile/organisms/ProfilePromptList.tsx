"use client"

import type { ProfileListCardType } from "@/types/profile/profileTypes"
import ProfilePromptItem from "../molecules/ProfilePromptItem"
import ProfileLoadMore from "../molecules/ProfileLoadMore"

interface ProfileListProps {
	listData: ProfileListCardType[]
	// initialData: {
	// 	items: ProfileListCardType[] // 초기 데이터
	// 	nextCursor: string | null // 다음 커서
	// }
}

export default function ProfilePromptList({ listData }: ProfileListProps) {
	return (
		<div>
			<div className="grid grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4">
				{listData.length > 0
					? listData.map((item) => (
							<ProfilePromptItem key={item.productUUID} productInfo={item} />
						))
					: null}
			</div>

			<ProfileLoadMore />
		</div>
	)
}

// import React from "react"
// import type { ProfileListCardType } from "@/types/profile/profileTypes"
// import ProfilePromptItem from "../molecules/ProfilePromptItem"
// import ProfileLoadMore from "../molecules/ProfileLoadMore"

// interface ProfileListProps {
// 	listData: ProfileListCardType[]
// }

// export default function ProfilePromptList({ listData }: ProfileListProps) {
// 	return (
// 		<>
// 			<div className="grid grid-cols-2 gap-8 xl:grid-cols-3 2xl:grid-cols-4">
// 				{listData.length > 0
// 					? listData.map((item) => (
// 							<ProfilePromptItem key={item.productUUID} productInfo={item} />
// 						))
// 					: null}
// 			</div>
// 			<ProfileLoadMore />
// 		</>
// 	)
// }
