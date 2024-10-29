import React from "react"
import FilterSideBar from "../organism/FilterSideBar"
import PromptList from "../organism/PromptList"
import promptListData from "@/dummy/marketplace/promptListData"
import { FilterData } from "@/types/marketplace/marketPlaceType"

function MarketPlaceTemplate() {
	return (
		<div>
			{/* <FilterSideBar /> */}
			<PromptList prompts={promptListData} />
		</div>
	)
}

export default MarketPlaceTemplate
