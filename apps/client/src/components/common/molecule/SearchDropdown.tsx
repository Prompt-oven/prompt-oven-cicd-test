"use client"

import React from "react"
import { useRouter } from "next/navigation"
import type {
	SearchResultCreatorType,
	SearchResultPromptType,
} from "@/types/search/searchResultType"
import SearchCreatorsItem from "../atom/SearchCreatorsItem"
import SearchPromptsItem from "../atom/SearchPromptsItem"

interface SearchDropdownProps {
	creators: SearchResultCreatorType[]
	prompts: SearchResultPromptType[]
}

function SearchDropdown({ creators, prompts }: SearchDropdownProps) {
	const router = useRouter()
	return (
		<div className="z-[1000]">
			Creators
			{creators.length > 0 &&
				creators.map((creator) => (
					<SearchCreatorsItem
						key={creator.id}
						creator={creator}
						onClick={() => router.push(`/profile/${creator.id}`)}
					/>
				))}
			<hr />
			Prompts
			{prompts.length > 0 &&
				prompts.map((prompt) => (
					<SearchPromptsItem
						key={prompt.id}
						prompt={prompt}
						onClick={() => router.push(`/prompt-detail/${prompt.id}`)}
					/>
				))}
		</div>
	)
}

export default SearchDropdown
