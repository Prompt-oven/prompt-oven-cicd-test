import React from "react"
import BestTop5Card from "../molecule/BestTop5Card"
import { BestCreatorDataTypes } from "@/types/best/bestTypes"

interface BestListProps<T> {
	data: T[]
}

function BestTop5({ data: top5Data }: BestListProps<BestCreatorDataTypes>) {
	return (
		<div>
			{top5Data.map((data) => (
				<BestTop5Card key={data.id} {...data} />
			))}
		</div>
	)
}

export default BestTop5
