import React from "react"
import { Checkbox } from "@repo/ui/checkbox"

function FilterOption() {
	return (
		<div>
			Products
			<div>
				<Checkbox />
				Prompts
			</div>
			<div>
				<Checkbox />
				Bundles
			</div>
			<div>
				<Checkbox />
				Apps
			</div>
		</div>
	)
}

export default FilterOption
