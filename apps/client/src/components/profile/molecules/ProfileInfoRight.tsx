import React from "react"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"

interface MemberRightProps {
	memberData: ProfileMemberInfoType
}

function formatFollowers(count: number) {
	if (count >= 1000) {
		return `${(count / 1000).toFixed(1)}K` // 소수점 한 자리까지 표시
	}
	return count.toString() // 1,000 미만은 그대로 반환
}

export default function ProfileInfoRight({ memberData }: MemberRightProps) {
	const formattedFollowing = formatFollowers(memberData.following)
	const formattedFollower = formatFollowers(memberData.follower)

	return (
		<div className="flex flex-grow rounded-lg bg-white/40 p-3 xl:p-6">
			<div className="grid w-full grid-cols-2 items-center justify-center gap-4 xl:grid-cols-4 xl:gap-8">
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Following
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						{formattedFollowing}
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Follower
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						{formattedFollower}
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Viewer
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						{memberData.viewer.toLocaleString()}
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Sales
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						{memberData.sales.toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	)
}
