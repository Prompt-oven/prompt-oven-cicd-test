import React from "react"

export default function ProfileBanner() {
	return (
		<div className="relative h-[660px] w-[660px]">
			{/* Tilted pink rectangle */}
			<div
				className="absolute h-full w-full rounded-lg bg-gradient-to-r from-[#A913F9] to-[#F913C4]"
				style={{
					transform: "rotate(-3.98deg)",
					top: "0px",
					left: "0px",
					zIndex: 0,
				}}>
				banner
			</div>

			{/* Main content */}
			<div className="absolute inset-0 z-[1] overflow-hidden rounded-lg bg-[#161616]"></div>
		</div>
	)
}
