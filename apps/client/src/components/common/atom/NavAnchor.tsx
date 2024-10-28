"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	color?: string
	activeColor?: string
	children?: ReactNode
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
	const textColor = `${colorPrefix}[${isActive ? activeColor : color}]`

	return (
		<Link
			href={href}
			className={[
				"hover: text-lg font-bold transition-colors duration-200",
				`hover:text-[${activeColor}]`,
				textColor,
			].join(" ")}
			{...props}>
			{children}
		</Link>
	)
}
