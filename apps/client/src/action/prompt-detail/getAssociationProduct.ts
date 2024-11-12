import {
	DetailCategoryDatas,
	DetailDropsDatas,
} from "@/dummy/prompt-detail/associationPromptDatas"
import type {
	DetailCategoryListType,
	DetailDropsCarouselType,
} from "@/types/prompt-detail/associationPromptType"

export async function getDetailDrops(): Promise<DetailDropsCarouselType[]> {
	const res: DetailDropsCarouselType[] = await DetailDropsDatas

	return res
}

export async function getDetailCategory(): Promise<DetailCategoryListType[]> {
	const res: DetailCategoryListType[] = await DetailCategoryDatas

	return res
}
