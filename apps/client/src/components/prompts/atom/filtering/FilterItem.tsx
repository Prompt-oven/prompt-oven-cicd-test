import React from "react"
import { Checkbox } from "@repo/ui/checkbox"

interface FilterItemProps {
	optionTitle: string
	checked: boolean
	onChange: (checked: boolean) => void
}

function FilterItem({ optionTitle, checked, onChange }: FilterItemProps) {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id={optionTitle} checked={checked} onCheckedChange={onChange} />
			<label className="text-sm font-medium text-gray-300">{optionTitle}</label>
		</div>
	)
}

export default FilterItem
