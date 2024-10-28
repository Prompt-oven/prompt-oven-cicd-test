import React from "react"

interface ProfileInfoCheckboxProps {
	title: string
	discription: string
	name: string
}

export default function ProfileInfoCheckbox({
	title,
	discription,
	name,
}: ProfileInfoCheckboxProps) {
	return (
		<div>
			<p className="text-sm font-bold text-white">{title}</p>
			<p className="mb-2 text-xs text-gray-500">{discription}</p>
			<div className="w-2/3">
				<input type="checkbox" name={name} />
			</div>
		</div>
	)
}
