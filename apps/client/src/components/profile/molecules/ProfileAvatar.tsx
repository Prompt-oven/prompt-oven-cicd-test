import Image from "next/image"
import React from "react"

export default function ProfileAvatar() {
	return (
		<div className="relative aspect-square rounded-xl border-4 border-white bg-[#1b1b1b]">
			<Image
				src="https://promptoven.s3.ap-northeast-2.amazonaws.com/dummy/TestAvartar.png"
				sizes="(max-width: 768px) 100vw, 360px"
				fill
				className="rounded-xl object-cover"
				alt="avatar"
				priority
			/>
		</div>
	)
}
