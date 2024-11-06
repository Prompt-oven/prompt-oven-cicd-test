import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import PromptDetailChoice from "../molecules/PromptDetailChoice"
import PromptDetailHash from "../molecules/PromptDetailHash"
import PromptDetailProductDescription from "../molecules/PromptDetailProductDescription"
import PromptDetailSellor from "../molecules/PromptDetailSellor"
import PromptDetailStandardInfo from "../molecules/PromptDetailStandardInfo"

interface PromptDetailInfoProps {
	productDetail: PromptDetailInfoType
}

export default function PromptDetailInfo({
	productDetail,
}: PromptDetailInfoProps) {
	return (
		<div className="flex min-h-[800px] flex-grow flex-col gap-12">
			<PromptDetailStandardInfo
				productRegistDate={productDetail.productRegistDate}
				productPrice={productDetail.productPrice}
				productName={productDetail.productName}
				productStar={productDetail.productStar}
				productReviewCount={productDetail.productReviewCount}
			/>

			<PromptDetailHash
				hashTag={productDetail.hashTag}
				bio={productDetail.bio}
			/>

			<PromptDetailSellor
				memberNickname={productDetail.memberNickname}
				memberProfileImage={productDetail.memberProfileImage}
			/>

			<PromptDetailProductDescription
				productDescription={productDetail.productDescription}
			/>

			<PromptDetailChoice
				isFavorite={productDetail.isFavorite}
				isCart={productDetail.isCart}
			/>
		</div>
	)
}
