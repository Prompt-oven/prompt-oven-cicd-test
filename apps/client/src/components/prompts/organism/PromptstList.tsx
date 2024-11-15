import Link from "next/link"
import type { PromptsType } from "@/types/prompts/promptsType"
import PromptItem from "../molecule/PromptItem"

interface PromptsListProps {
	promptList: PromptsType[]
}

export default function PromptstList({ promptList }: PromptsListProps) {
	return (
		<div>
			<div className="grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{promptList.length > 0
					? promptList.map((item) => (
							<Link href="/prompt-detail/1" key={item.productUUID}>
								<PromptItem productInfo={item} />
							</Link>
						))
					: null}
			</div>
		</div>
	)
}
