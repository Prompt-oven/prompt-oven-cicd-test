import Image from "next/image"
import { Button } from "@repo/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu"
import { Star, MoreVertical } from "@repo/ui/lucide"

export default function ProfileMemberInfo() {
	return (
		<div className="m-20 pb-52 md:m-24 xl:m-32">
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
			<div className="relative -top-[6.5rem] z-[5] m-10 flex h-24 items-center justify-between gap-4 md:h-32 xl:-top-[7.5rem] xl:h-40">
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

				<div className="flex h-[90%] flex-grow items-center justify-between gap-12 rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-8">
					<div className="flex flex-col justify-between gap-3">
						<div className="space-y-1 font-sora text-sm text-white xl:text-lg">
							<p className="font-semibold">@Creator</p>
							<span className="text-[10px]">join : 2024-11-01</span>
						</div>
						<div className="mt-4 flex items-center gap-2 md:mt-0">
							<Button
								variant="ghost"
								className="font-mulish bg-white/50 font-semibold text-white hover:bg-white/60">
								<Star className="mr-2 h-4 w-4" />
								<span>Favourite</span>
							</Button>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="hover:bDropdownMenug-white/60 w-10 bg-white/50 p-0">
										<MoreVertical className="h-4 w-4 text-white" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Share</DropdownMenuItem>
									<DropdownMenuItem>Report</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					{/* <div className="flex items-center gap-3 xl:flex-col xl:gap-2 xl:border-r xl:pr-8"></div> */}
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
				</div>
			</div>
		</div>
	)
}
