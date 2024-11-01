import MainFooter from "@/components/main/organism/MainFooter"
import React from "react"

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			{children}
			<MainFooter />
		</>
	)
}
