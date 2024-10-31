import React from "react"
import ProfileBanner from "@/components/profile/organisms/ProfileBanner"
import ProfileFilterSidebar from "@/components/profile/organisms/ProfileFilterSidebar"
import ProfileItemFilter from "@/components/profile/organisms/ProfileItemFilter"
import MemberInfo from "@/components/profile/organisms/ProfileMemberInfo"
import ProfilePromptItem from "@/components/profile/organisms/ProfilePromptItem"

export default function Profile() {
	return (
		<div>
			<ProfileBanner />
			<ProfilePromptItem />
			<MemberInfo />
			<ProfileItemFilter />
			<ProfileFilterSidebar />
		</div>
	)
}
