import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailInfo from "../organisms/PromptDetailInfo"
import PromptDetailThumbnail from "../organisms/PromptDetailThumbnail"

interface PromptDetailProps {
	productDetail: PromptDetailInfoType
	productReview: PromptReviewType
}

export default function PromptDetailTemplate({
	productDetail,
	productReview,
}: PromptDetailProps) {
	return (
		<section className="flex flex-col gap-16">
			<div className="container mx-auto rounded-lg">
				<div className="flex gap-20 sm:flex-col lg:flex-row">
					<PromptDetailThumbnail
						thumbnailUrl={productDetail.thumbnailUrl}
						productUUID={productDetail.productUUID}
					/>

					<div className="flex min-h-[800px] flex-grow flex-col gap-12">
						<PromptDetailInfo productDetail={productDetail} />
					</div>
				</div>
			</div>

			<div className="container mx-auto flex flex-col gap-8 text-white">
				<div className="text-4xl font-semibold">Prompt reviews</div>
				<div className="bg-[#1b1b1b]">{productReview.content[1].id}</div>
			</div>
		</section>
	)
}
