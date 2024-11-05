"use client"

import type { HTMLAttributes } from "react"
import React from "react"

interface ToggleIconProps extends HTMLAttributes<HTMLDivElement> {
	show: boolean
	showIcon: React.ReactNode
	hideIcon: React.ReactNode
}

function ToggleIcon({ show, showIcon, hideIcon, ...props }: ToggleIconProps) {
	return (
		<div
			role="button"
			{...props}
			className={`absolute right-4 top-1/2 -translate-y-1/2 text-white/70 ${props.className ?? ""}`}>
			{show ? hideIcon : showIcon}
		</div>
	)
}

export default ToggleIcon
