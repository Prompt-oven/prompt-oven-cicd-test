import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import { ProductDetailData } from "@/dummy/prompt-detail/promptDetailDatas"

export async function getProductDetail(): Promise<PromptDetailInfoType> {
	const res: PromptDetailInfoType = await ProductDetailData

	//     const res = await fetch(`${process.env.API_BASE_URL}/v1/profile`, {
	//       method: 'GET',
	//       headers: {
	//         'Content-Type': 'application/json',
	//         Authorization: `Bearer ${auth.accessToken}`,
	//       },
	//       cache: 'no-cache',
	//     })

	return res
}
