import Image from "next/image"
import React from "react"

export default function ProfileBanner() {
	return (
		<div className="relative flex h-[200px] justify-center px-4 md:h-[230px] xl:h-[260px]">
			<div
				className="h-full w-full rounded-lg bg-gradient-to-r from-[#A913F9] to-[#F913C4]"
				style={{
					transform: "rotate(3.2deg)",
					zIndex: 0,
				}}></div>
			<div className="inset-0 z-[1] overflow-hidden rounded-lg bg-[#1b1b1b]">
				<Image
					src="https://promptoven.s3.ap-northeast-2.amazonaws.com/dummy/Cover+Image.png"
					sizes="(max-width: 768px) 100vw, 1400px"
					fill
					className=" object-fit"
					priority
					alt="Banner"
				/>
			</div>
		</div>
	)
}
