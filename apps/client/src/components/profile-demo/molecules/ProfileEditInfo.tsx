import Link from "next/link"
import type { MemberInfoType } from "@/types/profile/profileTypes"
import { registeProfile } from "@/action/profile/getProfileData"
import ProfileAvatarUpload from "../atoms/ProfileAvatarUpload"
import ProfileBannerUpload from "../atoms/ProfileBannerUpload"
import ProfileInfoCheckbox from "../atoms/ProfileInfoCheckbox"
import ProfileInfoInput from "../atoms/ProfileInfoInput"
import ProfileInfoText from "../atoms/ProfileInfoText"
import ProfileSaveButton from "../atoms/ProfileSaveButton"
import ProfileSettingButton from "../atoms/ProfileSettingButton"

interface ProfileEditProps {
	memberInfo: MemberInfoType
	toggleVisibility: () => void
}

export default function ProfileEditInfo({
	memberInfo,
	toggleVisibility,
}: ProfileEditProps) {
	const profileRegisterHandler = async (formData: FormData) => {
		await registeProfile(formData)
	}

	return (
		<form action={profileRegisterHandler}>
			<div className="mb-20 mt-24">
				<div className="flex justify-end">
					<div className="flex w-40 gap-2">
						<ProfileSaveButton
							bgColor="#1b1b1b"
							fontColor="white"
							name="Save"
						/>

						<div className="flex w-28 items-end justify-center">
							<ProfileSettingButton
								bgColor="white"
								name="Cancel"
								toggleVisibility={toggleVisibility}
							/>
						</div>
					</div>
				</div>
				<div className="mb-12">
					<p className="text-sm font-bold text-white">Profile Picture</p>
					<p className="text-xs text-gray-500">
						Upload a picture to display on your profile.
					</p>

					<ProfileAvatarUpload currentAvatar={memberInfo.profileImage || ""} />
				</div>

				<ProfileBannerUpload />

				<div className="mb-12">
					<p className="text-sm font-bold text-white">Username</p>
					<p className="mb-2 text-xs text-gray-500">
						You can update your username in your
						<Link href="/account">
							<span className="underline"> Account Settings.</span>
						</Link>
					</p>
					<p>
						<span className="text-sm font-bold text-white">
							@{memberInfo.nickname}
						</span>
					</p>
				</div>

				<div className="flex flex-col gap-8">
					<ProfileInfoText
						title="Bio"
						discription="Tell the word about you."
						name="bio"
						inputData={memberInfo.bio}
						placeholder="Hi! I'm a prompt engineer specialising in Korea~!"
					/>

					<ProfileInfoInput
						title="X / Twitter"
						discription="Your X / Twitter username."
						name="xId"
						inputData={memberInfo.xId}
						placeholder="My X / Twitter Name"
					/>

					<ProfileInfoInput
						title="Instagram"
						discription="Your Instagram username."
						name="instagramId"
						inputData={memberInfo.instagramId}
						placeholder="My Instagram Name"
					/>

					<ProfileInfoInput
						title="Youtube"
						discription="Your YouTube account link."
						name="youtubeHandle"
						inputData={memberInfo.youtubeHandle}
						placeholder="https://www.youtube.com/user/email"
					/>

					<ProfileInfoInput
						title="Website"
						discription="Your Main Website link."
						name="webLink"
						inputData={memberInfo.webLink}
						placeholder="https://www.website.com/user/email"
					/>

					<ProfileInfoCheckbox
						title="Allow Messages"
						discription="Allow other users to message you."
						name="allowMessage"
						checkData={memberInfo.allowMessage}
					/>

					<ProfileInfoCheckbox
						title="Accept Custom Prompt Jobs"
						discription="You must have 25 sales across your prompts to be eligible to accept
					custom prompt requests."
						name="acceptCustom"
						checkData={memberInfo.acceptCustom}
					/>
				</div>
			</div>
		</form>
	)
}
