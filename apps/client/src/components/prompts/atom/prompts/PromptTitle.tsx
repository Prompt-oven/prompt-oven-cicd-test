import React from "react"

function PromptTitle({ title }: { title: string }) {
	return <h3 className="truncate text-sm font-medium text-white">{title}</h3>
}

export default PromptTitle
