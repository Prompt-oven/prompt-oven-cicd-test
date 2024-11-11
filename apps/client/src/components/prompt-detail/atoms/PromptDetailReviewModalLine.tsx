interface PromptDetailReviewModalLineProps {
	content: string
}

export default function PromptDetailReviewModalLine({
	content,
}: PromptDetailReviewModalLineProps) {
	return (
		<div className="mb-4 mt-4 flex gap-2 pl-4 lg:gap-4 lg:pl-12">
			<div className="flex min-h-[60px] w-[98%] items-center overflow-hidden rounded-lg bg-[#181318]">
				<p className="px-4 py-4 text-sm font-semibold transition-all duration-500 ease-in-out">
					<span>{content}</span>
				</p>
			</div>
		</div>
	)
}
