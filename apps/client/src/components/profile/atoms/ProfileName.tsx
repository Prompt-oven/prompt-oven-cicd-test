import React from "react"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"

interface MemberNameProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileName({ memberData }: MemberNameProps) {
	return (
		<div className="space-y-1 font-sora text-sm text-white xl:text-lg">
			<p className="font-semibold">@{memberData.nickname}</p>
			<p className="text-[10px] font-semibold">{memberData.email}</p>
			<span className="text-[10px]">join : {memberData.joined}</span>
		</div>
	)
}
