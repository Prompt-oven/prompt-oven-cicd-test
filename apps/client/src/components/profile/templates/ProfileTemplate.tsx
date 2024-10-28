import ProfileMain from "../organisms/ProfileMain"
import ProfilePromptList from "../organisms/ProfilePromptList"
import ProfileToMarket from "../organisms/ProfileToMarket"

export default function ProfileTemplate() {
	return (
		<>
			<ProfileMain />
			<ProfilePromptList />
			<ProfileToMarket />
		</>
	)
}
