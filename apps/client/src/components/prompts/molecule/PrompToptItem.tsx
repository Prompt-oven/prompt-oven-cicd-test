import Image from "next/image"
import { Card } from "@repo/ui/card"
import StarRate from "@repo/ui/rating-read-only"
import type { PromptsType } from "@/types/prompts/promptsType"

interface PrompToptItemProps {
	productInfo: PromptsType
	rank: number
}

export default function PrompToptItem({
	productInfo,
	rank,
}: PrompToptItemProps) {
	let cardHeight
	let cartWidth

	if (rank === 0) {
		cardHeight = "h-[190px] xl:h-[220px]"
		cartWidth = "max-w-[230px]"
	} else if (rank === 1) {
		cardHeight = "h-[170px] xl:h-[200px]"
		cartWidth = "max-w-[200px]"
	} else {
		cardHeight = "h-[150px] xl:h-[180px]"
		cartWidth = "max-w-[200px]"
	}

	return (
		<Card
			className={`flex h-full w-full ${cartWidth} flex-col overflow-hidden rounded-md border-0 shadow-md`}>
			<div className={`relative ${cardHeight}`}>
				<Image
					src={productInfo.thumbnailUrl}
					sizes="(max-width: 768px) 100vw, 1400px"
					fill
					priority
					alt="Cyberpunk character"
				/>
			</div>

			<div className="flex h-[107px] flex-col gap-2 bg-[#3d2d50] pl-2 pt-1">
				<StarRate value={productInfo.productStar} />

				<div>
					<p className="font-lato text-balance font-semibold text-white">
						{productInfo.productName}
					</p>
				</div>

				<div className="flex items-center justify-between">
					<p className="font-lato text-xs text-[#827682]">
						{productInfo.categoryName}
					</p>
					<p className="font-lato bottom-2 text-balance pr-2 text-white">
						{productInfo.productPrice.toLocaleString()}$
					</p>
				</div>
			</div>
		</Card>
	)
}
