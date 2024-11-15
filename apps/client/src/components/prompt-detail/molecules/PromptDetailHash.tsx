import React from "react"

interface PromptDetailHashProps {
	hashTag: string
	bio: string | undefined
}

export default function PromptDetailHash({
	hashTag,
	bio,
}: PromptDetailHashProps) {
	return (
		<div className="flex max-w-[600px] flex-col gap-4 ">
			<div className="text-2xl font-semibold text-white">{hashTag}</div>
			<div className="text-base text-[#bbbbbb]">{bio}</div>
		</div>
	)
}
