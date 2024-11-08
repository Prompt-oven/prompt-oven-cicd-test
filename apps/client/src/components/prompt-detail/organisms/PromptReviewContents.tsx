import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailNoReview from "../molecules/PromptDetailNoReview"
import PromptDetailReviewContent from "../molecules/PromptDetailReviewContent"

interface PromptReviewContentsProps {
	productReview: PromptReviewType
}

export default function PromptReviewContents({
	productReview,
}: PromptReviewContentsProps) {
	return (
		<div>
			{productReview.content.length > 0 ? (
				<ul className="mr-6 grid grid-cols-2 gap-1 lg:grid-cols-1">
					{productReview.content.map((review) => (
						<PromptDetailReviewContent
							key={review.id}
							memberNickname={review.memberNickname}
							memberProfileImage={review.memberProfileImage}
							updatedAt={review.updatedAt}
							content={review.content}
						/>
					))}
				</ul>
			) : (
				<PromptDetailNoReview />
			)}
		</div>
	)
}
