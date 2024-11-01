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
		<div className="mx-auto w-full max-w-7xl p-4">
			<div className="relative w-full rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-6">
				<div className="flex flex-col justify-between gap-6 md:flex-row">
					{/* Header Section */}
					<div className="flex flex-col justify-between md:w-1/3">
						<div className="space-y-1">
							<h1 className="font-sora text-2xl font-semibold text-white">
								Colourfull assests
							</h1>
							<p className="font-mulish text-sm text-white/90">
								@robix2x2x Created
							</p>
						</div>
						<div className="mt-4 flex items-center gap-2 md:mt-0">
							<Button
								variant="ghost"
								className="font-mulish bg-white/50 font-semibold text-white hover:bg-white/60">
								<Star className="mr-2 h-4 w-4" />
								Favourite
							</Button>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="w-10 bg-white/50 p-0 hover:bg-white/60">
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

					{/* Stats Section */}
					<div className="rounded-lg bg-white/40 p-6 md:w-2/3">
						<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
							<div className="flex flex-col">
								<span className="font-mulish text-sm text-gray-200">
									Collection of
								</span>
								<span className="font-mulish text-xl font-bold text-white">
									12
								</span>
							</div>
							<div className="flex flex-col border-white/20 md:border-l md:pl-4">
								<span className="font-mulish text-sm text-gray-200">
									follower
								</span>
								<span className="font-mulish text-xl font-bold text-white">
									2.14K
								</span>
							</div>
							<div className="flex flex-col border-white/20 md:border-l md:pl-4">
								<span className="font-mulish text-sm text-gray-200">
									viewer
								</span>
								<span className="font-mulish text-xl font-bold text-white">
									1312599
								</span>
							</div>
							<div className="flex flex-col border-white/20 md:border-l md:pl-4">
								<span className="font-mulish text-sm text-gray-200">
									Total Sales
								</span>
								<span className="font-mulish text-xl font-bold text-white">
									208,434,809
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
