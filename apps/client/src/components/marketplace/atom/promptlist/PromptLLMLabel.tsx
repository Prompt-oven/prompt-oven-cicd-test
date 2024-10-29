import React from "react"
import { Badge } from "@repo/ui/badge"
import { ChevronDown } from "@repo/ui/lucide"

interface PromptLLMLabelProps {
	model: string
}

function PromptLLMLabel({ model }: PromptLLMLabelProps) {
	return (
		<Badge
			variant="secondary"
			className="absolute left-2 top-2 bg-black bg-opacity-50">
			<span className="flex items-center">
				<img
					src="/placeholder.svg?height=16&width=16"
					alt={`${model}`}
					className="mr-1 h-4 w-4"
				/>
				{model}
			</span>
		</Badge>
	)
}

export default PromptLLMLabel
