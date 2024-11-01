import { Card } from "@repo/ui/card"
import { Badge } from "@repo/ui/badge"
import { Button } from "@repo/ui/button"
import { ShoppingCart, Star } from "@repo/ui/lucide"
import Image from "next/image"

export default function ProfilePromptItem() {
	return (
		<Card className="relative flex h-[440px] w-[255px] flex-col overflow-hidden rounded-md border-0">
			{/* Main Image */}
			<div className="relative h-[333px] w-full">
				<Image
					width={100}
					height={100}
					src="/placeholder.svg?height=333&width=255"
					alt="Cyberpunk character"
					priority
					className="h-full w-full rounded-t-md object-cover"
				/>
				<Badge className="absolute left-4 top-4 border-0 bg-gradient-to-r from-[#A913F9] to-[#3F5EFB] font-bold hover:from-[#A913F9] hover:to-[#3F5EFB]">
					NEW
				</Badge>
				<Button
					size="icon"
					className="absolute bottom-[-28px] right-4 z-10 h-14 w-14 rounded-full bg-[#AD20F2] shadow-lg shadow-[#514FD7]/40 hover:bg-[#AD20F2]/90">
					<ShoppingCart className="h-6 w-6" />
				</Button>
			</div>

			{/* Content Section */}
			<div className="relative flex h-[107px] flex-col gap-3 bg-[rgba(102,67,102,0.5)] p-4">
				{/* Rating */}
				<div className="flex gap-0.5">
					{[1, 2, 3, 4].map((i) => (
						<Star key={i} className="h-4 w-4 fill-[#FACC29] stroke-[#FACC29]" />
					))}
					<Star className="h-4 w-4 fill-[#E4E4E4] stroke-[#E4E4E4]" />
				</div>

				{/* Product Info */}
				<div className="space-y-1">
					<h3 className="font-lato text-base font-semibold text-white">
						Product name here
					</h3>
					<p className="text-white/36 font-lato text-xs">
						Model name goes here
					</p>
				</div>

				{/* Price */}
				<span className="font-lato absolute bottom-4 right-4 text-lg text-white">
					500$
				</span>
			</div>
		</Card>
	)
}
