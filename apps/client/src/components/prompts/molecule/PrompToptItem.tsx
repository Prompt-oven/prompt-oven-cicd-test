import Image from "next/image"
import { Card } from "@repo/ui/card"
import StarRate from "@repo/ui/rating-read-only"
import type { PromptsType } from "@/types/prompts/promptsType"
import PromptName from "../atom/PromptName"
import PromptCategory from "../atom/PromptCategory"
import PromptPrice from "../atom/PromptPrice"

interface PrompToptItemProps {
	promptTop: PromptsType
	rank: number
}

export default function PrompToptItem({ promptTop, rank }: PrompToptItemProps) {
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
					src={promptTop.thumbnailUrl}
					sizes="(max-width: 768px) 100vw, 1400px"
					fill
					priority
					alt="Cyberpunk character"
				/>
			</div>

			<div className="flex h-[107px] flex-col gap-2 bg-[#3d2d50] pl-2 pt-1">
				<StarRate value={promptTop.productStar} />
				<PromptName promptName={promptTop.productName} />

				<div className="flex items-center justify-between">
					<PromptCategory categoryName={promptTop.categoryName} />
					<PromptPrice productPrice={promptTop.productPrice} />
				</div>
			</div>
		</Card>
	)
}
