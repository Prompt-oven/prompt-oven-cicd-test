import SearchInput from "@/components/common/atom/SearchInput"
import ProfileFavoritePromptList from "../molecules/ProfileFavoitePromptList"
import ProfileNewestPromptList from "../molecules/ProfileNewestPromptList"

export default function ProfilePromptList() {
	const list = Array.from({ length: 7 }, (_, i) => `item${i + 1}`)

	return (
		<>
			{/* USER Prompt List */}
			<div>
				<SearchInput placeholder={`Search @name's prompts`} />
				<ProfileFavoritePromptList list={list} />
				<ProfileNewestPromptList list={list} />
			</div>
		</>
	)
}
