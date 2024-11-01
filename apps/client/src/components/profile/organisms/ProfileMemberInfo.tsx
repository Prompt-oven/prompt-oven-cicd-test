import ProfileAvatar from "../molecules/ProfileAvatar"
import ProfileBanner from "../molecules/ProfileBanner"
import ProfileInfoLeft from "../molecules/ProfileInfoLeft"
import ProfileInfoRight from "../molecules/ProfileInfoRight"

export default function ProfileMemberInfo() {
	return (
		<div className="m-20 pb-52 md:m-24 xl:m-32">
			<ProfileBanner />
			<div className="relative -top-[6.5rem] z-[5] m-10 flex h-24 items-center justify-between gap-4 md:h-32 xl:-top-[7.5rem] xl:h-40">
				<ProfileAvatar />

				<div className="flex h-[90%] flex-grow items-center justify-between gap-12 rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-8">
					<ProfileInfoLeft />
					<ProfileInfoRight />
				</div>
			</div>
		</div>
	)
}
