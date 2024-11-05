import PromptSideBar from "@/components/prompts/organism/PromptSideBar"

export default function Page() {
	return (
		<main id="prompts-list-page">
			{/* 좌측 */}

			<PromptSideBar />
			{/* 우측 */}
			<div title="promptlists-rightbar">
				<div title="selected-filter-lists">
					<div title="selected-filter-item">
						<div title="filter-name">In Auction</div>
						<div title="filter-value" />
						<div title="remove-filter-button">X</div>
					</div>
				</div>
				<div title="clear-all" className="text-red">
					Clear All
				</div>
				{/* 우측 프롬프트 카드 목록 */}
				<div title="promptItemCard">
					<div title="prompt-thumbnail-image" />
					<div title="item-tag" />
					<div title="prompt-info-for-ItemCard">
						<div title="star-point" />
						<div title="promptName" />
						<div title="modelName" />
						<div title="prompt-price" />
						<div title="cart-trigger-button" />
					</div>
				</div>
			</div>
		</main>
	)
}
