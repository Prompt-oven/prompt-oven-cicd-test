import React from "react"

interface ProfileSaveButtonProps {
	bgColor: string
	fontColor?: string
	name: string
}

export default function ProfileSaveButton({
	bgColor,
	fontColor,
	name,
}: ProfileSaveButtonProps) {
	return (
		<button
			type="submit"
			className="w-full rounded-md border border-gray-300 py-1 text-center text-sm font-bold"
			style={{ backgroundColor: bgColor }}>
			<span style={{ color: fontColor || "black" }}>{name}</span>
		</button>
	)
}
