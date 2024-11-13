import type { PromptsType, PromptTopType } from "@/types/prompts/promptsType"
import PrompToptItem from "../molecule/PrompToptItem"
import PromptsFilterSidebar from "../organism/PromptsFilterSidebar"
import PromptsItemFilter from "../organism/PromptsItemFilter"
import PromptstList from "../organism/PromptstList"

interface PromptsTemplateProps {
	promptTop: PromptTopType[]
	promptList: PromptsType[]
}

export default function PromptsTemplate({
	promptTop,
	promptList,
}: PromptsTemplateProps) {
	return (
		<section className="mx-2 w-full max-w-screen-2xl sm:mx-20 md:mx-24 xl:mx-32">
			<div className="font-semibold text-white">
				<div className="text-center text-3xl">Top Prompts</div>
				<div className="mt-6 flex items-end justify-center gap-6">
					{promptTop.length > 0
						? [1, 0, 2].map((index) => (
								<PrompToptItem
									key={promptTop[index].productUUID}
									promptTop={promptTop[index]}
									rank={Number(index)}
								/>
							))
						: null}
				</div>
			</div>

			<div className="my-16 flex flex-col gap-8 sm:flex-row">
				<PromptsFilterSidebar />

				<div className="flex w-full flex-col gap-8">
					<PromptsItemFilter promptCount={promptList.length} />
					<PromptstList promptList={promptList} />
				</div>
			</div>
		</section>
	)
}
