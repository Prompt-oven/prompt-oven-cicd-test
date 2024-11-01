import ProfileLoadMore from "@/components/profile/molecules/ProfileLoadMore"
import ProfileMemberInfo from "@/components/profile/organisms/ProfileMemberInfo"

export default function Profile() {
	return (
		<main className="flex min-h-screen w-screen justify-center overflow-auto bg-[#111111] py-1">
			<section className="w-full max-w-screen-2xl">
				<ProfileMemberInfo />

				{/* <ProfilePromptItem />
			<ProfileItemFilter />
			<ProfileFilterSidebar /> */}

				<ProfileLoadMore />
			</section>
		</main>
	)
}
