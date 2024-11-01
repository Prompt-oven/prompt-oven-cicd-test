import Image from "next/image"
import React from "react"

export default function ProfileAvatar() {
	return (
		<div className="border-1 relative aspect-square h-full rounded-xl border-white bg-[#1b1b1b]">
			<Image
				src="https://promptoven.s3.ap-northeast-2.amazonaws.com/dummy/TestAvartar.png"
				sizes="(max-width: 768px) 100vw, 360px"
				fill
				className="object-fit"
				alt="avatar"
				priority
			/>
		</div>
	)
}
