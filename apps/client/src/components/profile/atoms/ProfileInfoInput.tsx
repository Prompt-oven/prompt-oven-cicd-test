import React from "react"

interface ProfileInfoInputProps {
	title: string
	discription: string
	name: string
	placeholder: string
}

export default function ProfileInfoInput({
	title,
	discription,
	name,
	placeholder,
}: ProfileInfoInputProps) {
	return (
		<div>
			<p className="text-sm font-bold text-white">{title}</p>
			<p className="mb-2 text-xs text-gray-500">{discription}</p>
			<div className="w-2/3">
				<input
					type="text"
					name={name}
					placeholder={placeholder}
					className="w-full bg-[#1b1b1b] py-1 pl-2 text-white"
				/>
			</div>
		</div>
	)
}
