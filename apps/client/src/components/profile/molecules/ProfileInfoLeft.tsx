import React from "react"
import { Button } from "@repo/ui/button"
import { Star, MoreVertical } from "@repo/ui/lucide"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileName from "../atoms/ProfileName"

interface MemberLeftProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileInfoLeft({ memberData }: MemberLeftProps) {
	return (
		<div className="flex flex-col justify-between gap-1 xl:gap-3">
			<ProfileName memberData={memberData} />

			<div className="mt-4 flex items-center gap-2 md:mt-0">
				<Button
					variant="ghost"
					className="font-mulish bg-white/50 font-semibold text-white hover:bg-white/60">
					<Star className="mr-2 h-4 w-4" />
					<span>Follow</span>
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
						<DropdownMenuItem>Modify</DropdownMenuItem>
						<DropdownMenuItem>Report</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
