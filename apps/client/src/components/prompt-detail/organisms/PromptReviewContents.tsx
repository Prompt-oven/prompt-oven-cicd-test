import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailReviewMore from "../molecules/PromptDetailReviewMore"
import PromptDetailNoReview from "../molecules/PromptDetailNoReview"
import PromptDetailReviewContent from "../molecules/PromptDetailReviewContent"

interface PromptReviewContentsProps {
	productDetail: PromptDetailInfoType
	productReview: PromptReviewType
}

export default function PromptReviewContents({
	productDetail,
	productReview,
}: PromptReviewContentsProps) {
	return (
		<div>
			{productReview.content.length > 0 ? (
				<div>
					<ul className="mr-6 grid grid-cols-2 gap-4 lg:grid-cols-1">
						{productReview.content.slice(0, 2).map((review) => (
							<PromptDetailReviewContent
								key={review.id}
								memberNickname={review.memberNickname}
								memberProfileImage={review.memberProfileImage}
								updatedAt={review.updatedAt}
								content={review.content}
							/>
						))}
					</ul>
					<PromptDetailReviewMore
						productDetail={productDetail}
						productReview={productReview}
					/>
				</div>
			) : (
				<PromptDetailNoReview />
			)}
		</div>
	)
}
