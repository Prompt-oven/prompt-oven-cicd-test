import type {
	ProfileListCardType,
	ProfileMemberInfoType,
} from "@/types/profile/profileTypes"
import ProfileFilterSidebar from "../organisms/ProfileFilterSidebar"
import ProfileItemFilter from "../organisms/ProfileItemFilter"
import ProfileMemberInfo from "../organisms/ProfileMemberInfo"
import ProfilePromptList from "../organisms/ProfilePromptList"

interface ProfileDataProps {
	memberData: ProfileMemberInfoType // 회원 정보
	listData: ProfileListCardType[]
	// listData: {
	// 	items: ProfileListCardType[] // 프로필 카드 목록
	// 	nextCursor: string | null // 다음 커서
	// }
}

export default function ProfileTemplate({
	memberData,
	listData,
}: ProfileDataProps) {
	return (
		<section className="mx-2 mt-12 w-full max-w-screen-2xl sm:m-20 md:m-24 xl:m-32">
			<ProfileMemberInfo memberData={memberData} />

			<div className="mx-10 mb-16 flex flex-col gap-8 sm:flex-row">
				<ProfileFilterSidebar />
				<div className="flex w-full flex-col gap-8">
					<ProfileItemFilter promptCount={listData.length} />
					<ProfilePromptList listData={listData} />
				</div>
			</div>
		</section>
	)
}
