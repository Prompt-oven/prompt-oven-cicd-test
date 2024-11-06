"use client"

import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailInfo from "../organisms/PromptDetailInfo"
import PromptDetailThumbnail from "../organisms/PromptDetailThumbnail"

interface PromptDetailProps {
	productDetail: PromptDetailInfoType
	productReview: PromptReviewType[]
}

export default function PromptDetailTemplate({
	productDetail,
	productReview,
}: PromptDetailProps) {
	return (
		<div className="container mx-auto rounded-lg bg-[#1b1b1b] p-6">
			<div className="flex gap-20 sm:flex-col lg:flex-row">
				<PromptDetailThumbnail
					thumbnailUrl={productDetail.thumbnailUrl}
					productUUID={productDetail.productUUID}
				/>

				<div className="flex min-h-[800px] flex-grow flex-col gap-12">
					<PromptDetailInfo productDetail={productDetail} />
				</div>
			</div>
			<div>{productReview.length ? productReview.length : null}</div>
		</div>
	)
}
