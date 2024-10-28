import React from "react"

interface ProfileSettingButtonProps {
	bgColor: string
	fontColor?: string
	name: string
	toggleVisibility: () => void
}

export default function ProfileSettingButton({
	bgColor,
	fontColor,
	name,
	toggleVisibility,
}: ProfileSettingButtonProps) {
	return (
		<button
			type="button"
			className="w-full rounded-md border border-gray-300 py-1 text-center text-sm font-bold"
			style={{ backgroundColor: bgColor }}
			onClick={toggleVisibility}>
			<span style={{ color: fontColor || "black" }}>{name}</span>
		</button>
	)
}
