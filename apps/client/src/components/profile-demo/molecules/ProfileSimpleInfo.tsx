import type {
	MemberInfoType,
	ReviewAndFollowType,
} from "@/types/profile/profileTypes"
import ProfileSettingButton from "../atoms/ProfileSettingButton"

interface SimpleInfoProps {
	memberInfo: MemberInfoType
	reviewAndFollowCount: ReviewAndFollowType
	toggleVisibility: () => void
}

export default function ProfileSimpleInfo({
	memberInfo,
	reviewAndFollowCount,
	toggleVisibility,
}: SimpleInfoProps) {
	return (
		<div className="mb-10 mt-24">
			<div className="flex justify-end">
				<div className="w-28">
					<ProfileSettingButton
						bgColor="white"
						name="Edit Profile"
						toggleVisibility={toggleVisibility}
					/>
				</div>
			</div>

			<div className="mx-8 mb-4 flex items-center">
				<span className="font-bold text-white">@{memberInfo.nickname}</span>
			</div>

			<ul className="mx-8 flex gap-8 text-sm text-white">
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">
							{reviewAndFollowCount.reviews}
						</span>
						reviews
					</p>
				</li>
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">
							{reviewAndFollowCount.following}
						</span>
						following
					</p>
				</li>
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">
							{reviewAndFollowCount.followers}
						</span>
						followers
					</p>
				</li>
			</ul>
		</div>
	)
}
