"use client"

import React, { Suspense } from "react"
import { useRouter } from "next/navigation"
import type {
	SearchResultCreatorType,
	SearchResultPromptType,
} from "@/types/search/searchResultType"
import SearchCreatorsItem from "../atom/SearchCreatorsItem"
import SearchPromptsItem from "../atom/SearchPromptsItem"
import SearchPromptsItemSkeleton from "../atom/SearchItemSkeleton"

interface SearchDropdownProps {
	creators: SearchResultCreatorType[]
	prompts: SearchResultPromptType[]
}

function SearchDropdown({ creators, prompts }: SearchDropdownProps) {
	const router = useRouter()
	return (
		<div className="bg-neutral-400">
			<div>
				<div className="text-m p-2 pt-3 text-white">Prompts</div>
				{prompts.length > 0 &&
					prompts.map((prompt) => (
						<Suspense key={prompt.id} fallback={<SearchPromptsItemSkeleton />}>
							<SearchPromptsItem
								prompt={prompt}
								onClick={() => router.push(`/prompt-detail/${prompt.id}`)}
							/>
						</Suspense>
					))}
			</div>
			<hr className="mt-3" />
			<div>
				<div className="text-m p-2 pt-3 text-white">Creators</div>
				{creators.length > 0 &&
					creators.map((creator) => (
						<Suspense key={creator.id} fallback={<SearchPromptsItemSkeleton />}>
							<SearchCreatorsItem
								creator={creator}
								onClick={() => router.push(`/profile/${creator.id}`)}
							/>
						</Suspense>
					))}
			</div>
		</div>
	)
}

export default SearchDropdown
