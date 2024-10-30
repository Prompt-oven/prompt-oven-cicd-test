import React from "react"
import FilterSideBar from "../organism/FilterSideBar"
import PromptList from "../organism/PromptList"
import promptListData from "@/dummy/prompts/promptListData"
import { FilterData } from "@/types/prompts/marketPlaceType"

function MarketPlaceTemplate() {
	return (
		<div>
			{/* <FilterSideBar /> */}
			<PromptList prompts={promptListData} />
		</div>
	)
}

export default MarketPlaceTemplate
