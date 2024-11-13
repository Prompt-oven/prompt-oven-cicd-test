"use client"

import type { PromptsType } from "@/types/prompts/promptsType"
import PromptItem from "../molecule/PromptItem"

interface PromptsListProps {
	promptList: PromptsType[]
}

export default function PromptstList({ promptList }: PromptsListProps) {
	return (
		<div>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{promptList.length > 0
					? promptList.map((item) => (
							<PromptItem key={item.productUUID} productInfo={item} />
						))
					: null}
			</div>
		</div>
	)
}
