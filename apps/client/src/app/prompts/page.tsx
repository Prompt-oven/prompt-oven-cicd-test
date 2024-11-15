import { getPromptList, getPromptTop } from "@/action/prompts/getPromptsData"
import PromptsTemplate from "@/components/prompts/template/PromptsTemplate"

export default async function Marketplace() {
	const promptTop = await getPromptTop()
	const promptList = await getPromptList()

	return (
		<main className="flex min-h-screen justify-center overflow-auto bg-[#111111] py-10">
			<PromptsTemplate promptTop={promptTop} promptList={promptList} />
		</main>
	)
}
