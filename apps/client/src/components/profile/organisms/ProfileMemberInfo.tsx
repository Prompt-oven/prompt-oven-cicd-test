import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileAvatar from "../molecules/ProfileAvatar"
import ProfileBanner from "../molecules/ProfileBanner"
import ProfileInfoLeft from "../molecules/ProfileInfoLeft"
import ProfileInfoRight from "../molecules/ProfileInfoRight"

interface MemberDataProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileMemberInfo({ memberData }: MemberDataProps) {
	return (
		<div className="h-[350px] xl:h-[400px]">
			<ProfileBanner memberBanner={memberData.bannerImageUrl} />
			<div className="relative -top-[6.5rem] z-[5] mx-10 mt-10 flex h-24 items-center justify-between gap-4 md:h-32 xl:-top-[7.5rem] xl:h-40">
				<ProfileAvatar memberAvatar={memberData.avatarImageUrl} />

				<div className="flex h-[90%] flex-grow items-center justify-between gap-12 rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-8">
					<ProfileInfoLeft memberData={memberData} />
					<ProfileInfoRight memberData={memberData} />
				</div>
			</div>
		</div>
	)
}
