import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileModifyInfo from "../organisms/ProfileModifyInfo"

interface ProfileModifyTemplateProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileModifyTemplate({
	memberData,
}: ProfileModifyTemplateProps) {
	return (
		<section className="sm:m-18 mx-2 mt-12 w-full max-w-screen-2xl sm:mt-20 lg:m-24 xl:m-32">
			<ProfileModifyInfo memberData={memberData} />
		</section>
	)
}
