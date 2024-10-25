import React from "react"
import ProfileInfoInput from "../atoms/ProfileInfoInput"
import ProfileInfoCheckbox from "../atoms/ProfileInfoCheckbox"
import ProfileBannerUpload from "../atoms/ProfileBannerUpload"
import ProfileAvatarUpload from "../atoms/ProfileAvatarUpload"
import Link from "next/link"

export default function ProfileEditInfo() {
	return (
		<div className="mb-20 mt-32">
			<div className="mb-12">
				<p className="text-sm font-bold text-white">Profile Picture</p>
				<p className="text-xs text-gray-500">
					Upload a picture to display on your profile.
				</p>

				<ProfileAvatarUpload />
			</div>

			<ProfileBannerUpload />

			<div className="mb-12">
				<p className="text-sm font-bold text-white">Username</p>
				<p className="mb-2 text-xs text-gray-500">
					You can update your username in your
					<Link href={"/account"}>
						<span className="underline"> Account Settings.</span>
					</Link>
				</p>
				<p>
					<span className="text-sm font-bold text-white">@Name</span>
				</p>
			</div>

			<div className="flex flex-col gap-8">
				<ProfileInfoInput
					title="X / Twitter"
					discription="Your X / Twitter username."
					name="Twitter"
					placeholder="My X / Twitter Name"
				/>

				<ProfileInfoInput
					title="Instagram"
					discription="Your Instagram username."
					name="Instagram"
					placeholder="My Instagram Name"
				/>

				<ProfileInfoInput
					title="Youtube"
					discription="Your YouTube account link."
					name="Youtube"
					placeholder="https://www.youtube.com/user/email"
				/>

				<ProfileInfoInput
					title="Website"
					discription="Your Main Website link."
					name="Website"
					placeholder="https://www.website.com/user/email"
				/>

				<ProfileInfoCheckbox
					title="Allow Messages"
					discription="Allow other users to message you."
					name="allowMessage"
				/>

				<ProfileInfoCheckbox
					title="Accept Custom Prompt Jobs"
					discription="You must have 25 sales across your prompts to be eligible to accept
						custom prompt requests."
					name="acceptCustom"
				/>
			</div>
		</div>
	)
}
