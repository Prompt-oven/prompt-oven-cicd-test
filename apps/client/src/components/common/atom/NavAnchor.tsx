"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	color?: string
	activeColor?: string
	children?: React.ReactNode
}

export default function NavAnchor({
	href,
	children,
	color = "#D9D9D9",
	activeColor = "#A913F9",
	...props
}: NavAnchorProps) {
	const pathname = usePathname()
	const isActive = pathname === href
	
	const colorPrefix = "text-"
	const _activeColor = activeColor ?? "#A913F9"
	const textColor = colorPrefix + "[" + (isActive ? _activeColor : color) + "]"

	return (
		<Link
			href={href}
			className={`
        hover: text-lg font-bold transition-colors
        duration-200
        hover:text-[${activeColor}]
        ${textColor}
      `}
			{...props}>
			{children}
		</Link>
	)
}
