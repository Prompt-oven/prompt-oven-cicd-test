import type { MemberInfoType } from "@/types/profile/profileTypes"
import ProfileAvatar from "../atoms/ProfileAvatar"
import ProfileBanner from "../atoms/ProfileBanner"

interface ProfileSettingProps {
	memberInfo: MemberInfoType
}

export default function ProfileImageInfo({ memberInfo }: ProfileSettingProps) {
	return (
		<div className="relative">
			<ProfileBanner banner={memberInfo.banner || ""} />

			<div className="absolute left-0 right-0 top-28 mx-auto">
				<div className="mx-8 flex h-44 justify-between">
					<ProfileAvatar avatar={memberInfo.profileImage || ""} />
				</div>
			</div>
		</div>
	)
}
