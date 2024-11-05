import React from "react"
import promptListData from "@/dummy/prompts/promptListData"
import PromptList from "../organism/PromptList"
// import FilterSideBar from "../organism/FilterSideBar"
// import { FilterData } from "@/types/prompts/marketPlaceType"

function PromptsTemplate() {
	return (
		<div>
			{/* <FilterSideBar /> */}
			<PromptList prompts={promptListData} />
		</div>
	)
}

export default PromptsTemplate
