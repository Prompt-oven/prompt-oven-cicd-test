import { useState } from "react"
// import { useFetchSearchResults } from "@/hooks/fetchSearchResults"
import {
	SearchResultCreatorType,
	SearchResultPromptType,
} from "@/types/search/searchResultType"

export function useSearchActions() {
	const [creators, setCreators] = useState<SearchResultCreatorType[]>([])
	const [prompts, setPrompts] = useState<SearchResultPromptType[]>([])

	async function fetchAndSetSearchResults() {
		// const { creators, prompts } = await useFetchSearchResults()
		setCreators(creators)
		setPrompts(prompts)
	}

	return {
		creators,
		prompts,
		fetchAndSetSearchResults,
	}
}
