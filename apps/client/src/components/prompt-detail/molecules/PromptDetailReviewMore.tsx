import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@repo/ui/dialog"
import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailHoverMouse from "../atoms/PromptDetailHoverMouse"
import PromptDetailReviewModal from "../organisms/PromptDetailReviewModal"

interface PromptDetailReviewMoreProps {
	productDetail: PromptDetailInfoType
	productReview: PromptReviewType
}

export default function PromptDetailReviewMore({
	productDetail,
	productReview,
}: PromptDetailReviewMoreProps) {
	return (
		<div className="mx-auto my-5 flex justify-center">
			<Dialog>
				<DialogTrigger>
					<div
						role="button"
						className="rounded-full bg-[#424040] px-4 py-1 text-white hover:bg-[#2e2d2d]">
						View Modal
					</div>
				</DialogTrigger>
				<DialogContent className="h-[600px] min-w-[400px] max-w-[500px] rounded border-none bg-[#252525] lg:h-[700px] lg:min-w-[600px] lg:max-w-[900px]">
					<DialogHeader className="mb-4 ml-4 flex flex-row items-center gap-4 lg:mb-0">
						<DialogTitle className="font-bold text-white">
							{/* <Avatar className="h-5 w-5">
								<AvatarImage
									src={productDetail.thumbnailUrl}
									alt={productDetail.productName}
								/>
								<AvatarFallback>AU</AvatarFallback>
							</Avatar> */}

							<PromptDetailHoverMouse productDetail={productDetail} />

							{/* <div className="mb-6 flex items-center justify-center gap-4">
								<Image
									src={productDetail.thumbnailUrl}
									width={100}
									height={100}
									alt={productDetail.productName}
									priority
								/>
								<div className="flex flex-col items-start justify-between gap-4">
									<div className="flex flex-col gap-1">
										<p className="line-clamp-1 text-xl">
											<span className="text-start">
												{productDetail.productName}
											</span>
										</p>
										<div className="flex items-center gap-4">
											<StarRatingReadOnly value={productDetail.productStar} />
											<span className="mt-1 text-xs font-semibold">
												( {productDetail.productReviewCount} )
											</span>
										</div>
										<p className="flex items-start">
											<span className="mr-1 text-sm">$</span>
											<span className="text-base">
												{productDetail.productPrice}
											</span>
										</p>
									</div>

									<div className="flex items-center gap-2">
										<Link
											href={`/profile/${productDetail.memberNickname}`}
											className="flex items-center gap-2">
											<Avatar className="h-6 w-6">
												<AvatarImage
													src={productDetail.memberProfileImage}
													alt={productDetail.memberNickname}
												/>
												<AvatarFallback>AU</AvatarFallback>
											</Avatar>
											<p className="mt-1 text-base font-bold">
												{productDetail.memberNickname}
											</p>
										</Link>
									</div>
								</div>
							</div> */}
						</DialogTitle>

						<DialogDescription className="!mt-0 text-sm text-[#C1C1C1]">
							<span>All Reviews</span>
						</DialogDescription>
					</DialogHeader>
					<ul className="custom-scrollbar grid max-h-[550px] grid-cols-1 gap-2 overflow-auto">
						{productReview.content.map((review) => (
							<PromptDetailReviewModal
								key={review.id}
								memberNickname={review.memberNickname}
								memberProfileImage={review.memberProfileImage}
								updatedAt={review.updatedAt}
								content={review.content}
							/>
						))}
					</ul>
				</DialogContent>
			</Dialog>
		</div>
	)
}
