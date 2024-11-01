import Image from "next/image"
import React from "react"

export default function ProfileBanner() {
	return (
		<div className="flex justify-center">
			<div className="relative m-auto mt-28 flex h-[240px] w-[70%] justify-center px-4">
				<div
					className="h-full w-full rounded-lg bg-gradient-to-r from-[#A913F9] to-[#F913C4]"
					style={{
						transform: "rotate(3.2deg)",
						zIndex: 0,
					}}></div>
				<div className="absolute inset-0 z-[1] overflow-hidden rounded-lg bg-[#1b1b1b]">
					<Image
						src="https://promptoven.s3.ap-northeast-2.amazonaws.com/dummy/Cover+Image.png"
						sizes="(max-width: 768px) 100vw, 1400px"
						fill
						className="object-cover"
						priority
						alt="Banner"
					/>
				</div>
			</div>
		</div>
	)
}
