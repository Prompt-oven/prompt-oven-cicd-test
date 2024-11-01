import React from "react"

export default function ProfileInfoRight() {
	return (
		<div className="flex flex-grow rounded-lg bg-white/40 p-3 xl:p-6">
			<div className="grid w-full grid-cols-2 items-center justify-center gap-4 xl:grid-cols-4 xl:gap-8">
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Following
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						12
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Follower
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						2.14K
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Viewer
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						1312599
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 xl:flex-col">
					<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
						Sales
					</span>
					<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
						1111
					</span>
				</div>
			</div>
		</div>
	)
}
