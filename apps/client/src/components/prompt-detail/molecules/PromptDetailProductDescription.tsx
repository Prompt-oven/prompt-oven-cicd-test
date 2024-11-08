"use client"

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

	return (
		<div className="max-w-[820px]">
			<Card className="border-none bg-[#252525] shadow-lg">
				<CardContent className="p-6">
					<div className="flex justify-between">
						<p className="text-xl font-bold text-white">Description</p>
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
						className={`text-lg leading-relaxed text-[#969696] transition-all duration-500 ease-in-out ${
							isExpanded
								? "mt-4 max-h-[1000px] opacity-100"
								: "max-h-0 overflow-hidden opacity-0"
						}`}>
						{productDescription}
					</p>
				</CardContent>
			</Card>
		</div>
	)
}
