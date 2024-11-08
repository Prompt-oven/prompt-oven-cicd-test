import React from "react"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"

interface MemberNameProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileName({ memberData }: MemberNameProps) {
	return (
		<div className="text-sm text-white">
			<p className="mb-2 flex gap-2 text-sm font-semibold">
				{memberData.hashTag ? `#${memberData.hashTag}` : "No HashTag"}
			</p>
			<p className="flex flex-col gap-0 text-[10px] sm:flex-row md:gap-4">
				<span className="font-semibold">@{memberData.nickname}</span>
				<span className="text-[#e5d9f2]">{memberData.joined}</span>
			</p>
			<p className="text-[10px]">
				{memberData.email ? memberData.email : "No Email"}
			</p>
		</div>
	)
}
