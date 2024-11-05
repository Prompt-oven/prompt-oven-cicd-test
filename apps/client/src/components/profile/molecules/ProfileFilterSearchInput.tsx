"use client"

import { FilterInput } from "@repo/ui/filterInput"
import { Search } from "@repo/ui/lucide"

export function ProfileFilterSearchInput({
	value = "",
	onChange,
}: {
	value?: string
	onChange?: (value: string) => void
}) {
	return (
		<div className="relative">
			<FilterInput
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				placeholder="Search"
				className="border-none bg-white/10 pl-10 text-white placeholder:text-white/70"
			/>
			<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
		</div>
	)
}
