import { BestCreatorDataTypes } from "@/types/best/bestTypes"
import React from "react"

interface BestCardProps extends BestCreatorDataTypes {
	name: string
	rank: number
	image: string
}

function BestTop5Card({ name, rank, image }: BestCardProps) {
	return (
		<div>
			<div>
				<img src={image} alt={name} />
				<p className="text-white">{rank}</p>
				<p className="text-white">{name}</p>
			</div>
		</div>
	)
}

export default BestTop5Card
