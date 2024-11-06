import { useState } from "react"
import { Card, CardContent } from "@repo/ui/card"
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@repo/ui/lucide"

interface PromptDetailProductDescriptionProps {
	productDescription: string
}

export default function PromptDetailProductDescription({
	productDescription,
}: PromptDetailProductDescriptionProps) {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleDescription = () => {
		setIsExpanded(!isExpanded)
	}

	const isLongDescription = productDescription.split("\n").length > 3

	return (
		<div className="max-w-[800px]">
			<Card className="border-none bg-[#252525] shadow-lg">
				<CardContent className="p-6">
					<div className="flex justify-between">
						<p className="mb-4 text-xl font-bold text-white">Description</p>
						{isExpanded ? (
							<ArrowUpCircleIcon
								className="cursor-pointer text-white"
								onClick={toggleDescription}
							/>
						) : (
							<ArrowDownCircleIcon
								className="cursor-pointer text-white"
								onClick={toggleDescription}
							/>
						)}
					</div>

					<p
						className={`text-lg leading-relaxed text-[#969696] ${isExpanded ? "" : "line-clamp-3"}`}>
						{productDescription}
					</p>

					{!isExpanded && isLongDescription ? (
						<span className="text-[#969696]">...</span>
					) : null}
				</CardContent>
			</Card>
		</div>
	)
}
