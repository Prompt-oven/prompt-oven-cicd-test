import React from "react"

interface PromptNameProps {
	promptName: string
}

export default function PromptName({ promptName }: PromptNameProps) {
	return (
		<div>
			<p className="font-lato text-sm font-semibold text-white">{promptName}</p>
		</div>
	)
}
