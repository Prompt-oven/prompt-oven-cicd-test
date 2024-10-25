"use client"

import ProfileTemplate from "@/components/profile/templates/ProfileTemplate"
import { useState } from "react"

export default function Page() {
	const items = Array.from({ length: 7 }, (_, i) => `item${i + 1}`)

	const [isVisible, setIsVisible] = useState<boolean>(true)

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev)
	}

	return (
		<main className="bg-[#111111] py-10">
			<section className="m-auto max-w-[1056px] px-2">
				<ProfileTemplate />
			</section>
		</main>
	)
}
