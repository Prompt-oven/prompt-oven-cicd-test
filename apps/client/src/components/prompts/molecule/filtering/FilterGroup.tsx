import React from "react"
// import { Checkbox } from "@repo/ui/checkbox"
import FilterItem from "../../atom/filtering/FilterItem"

interface FilterGroupProps {
	groupTitle: string
	filterOptions: string[]
	selectedOptions: string[]
	onChange: (option: string, checked: boolean) => void
}

function FilterGroup({
	groupTitle,
	filterOptions,
	selectedOptions,
	onChange,
}: FilterGroupProps) {
	return (
		<div className="mb-6">
			<h3 className="mb-2 text-lg font-semibold text-white">{groupTitle}</h3>
			<div className="space-y-2">
				{filterOptions.map((option) => (
					<FilterItem
						key={option}
						optionTitle={option}
						checked={selectedOptions.includes(option)}
						onChange={(checked) => onChange(option, checked)}
					/>
				))}
			</div>
		</div>
	)
}

export default FilterGroup
