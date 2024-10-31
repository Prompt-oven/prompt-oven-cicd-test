import React from "react"

export default function ProfileListTitle({ title }: { title: string }) {
	return (
		<div className="border-b border-b-white pb-1">
			<span className="font-bold text-white">{title}</span>
		</div>
	)
}
