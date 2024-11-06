import React from "react"
import Link from "next/link"
import { Button } from "@repo/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui/avatar"

interface PromptDetailSellorProps {
	memberNickname: string | undefined
	memberProfileImage: string | undefined
}

export default function PromptDetailSellor({
	memberNickname,
	memberProfileImage,
}: PromptDetailSellorProps) {
	return (
		<div className="flex items-center justify-start gap-4">
			<Link href={`/profile/${memberNickname}`}>
				<div className="flex items-center rounded-full bg-gradient-to-r from-[#ca8feb] to-[#7f24af] p-2 pr-4 hover:opacity-90">
					<Avatar className="h-8 w-8">
						<AvatarImage src={memberProfileImage} alt={memberNickname} />
						<AvatarFallback>AU</AvatarFallback>
					</Avatar>
					<p className="ml-2 whitespace-nowrap text-white">
						<span className="font-medium">@</span>
						<span className="font-normal">{memberNickname}</span>
					</p>
				</div>
			</Link>

			<Button
				variant="secondary"
				className="h-12 rounded-full bg-gradient-to-r from-[#d48585] to-[#ca4646] text-white hover:opacity-90">
				<span className="p-2">FOLLOW</span>
			</Button>
		</div>
	)
}
