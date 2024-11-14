import React from "react"

interface PromptCategoryProps {
	categoryName: string
}

export default function PromptCategory({ categoryName }: PromptCategoryProps) {
	return <p className="font-lato text-xs text-[#827682]">{categoryName}</p>
}
