"use client"

import React, { useState, useEffect } from "react"
import debounce from "lodash/debounce"
import { useSearchActions } from "@/action/hooks/useSearchResults"
import SearchInput from "../atom/SearchInput"
import SearchDropdown from "../molecule/SearchDropdown"

function SearchOrganism() {
	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState("")
	const { creators, prompts, fetchAndSetSearchResults } = useSearchActions()

	const debouncedFetchAndSetSearchResults = debounce((searchQuery: string) => {
		fetchAndSetSearchResults(searchQuery)
	}, 300)

	useEffect(() => {
		if (query) {
			setOpen(true)
			debouncedFetchAndSetSearchResults(query)
		} else {
			setOpen(false)
		}
	}, [query])

	const handleFocus = () => setOpen(true)
	const handleBlur = () => setTimeout(() => setOpen(false), 100)
	return (
		<div>
			<SearchInput
				query={query}
				setQuery={setQuery}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{open && query.length > 0 && (
				<SearchDropdown creators={creators} prompts={prompts} />
			)}
		</div>
	)
}

export default SearchOrganism
