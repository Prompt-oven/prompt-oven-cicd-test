import React from "react"
import MainHeader from "@/components/main/molecule/MainHeader"
import MainFooter from "@/components/main/organism/MainFooter"

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<MainHeader />
			{children}
			<MainFooter />
		</>
	)
}
