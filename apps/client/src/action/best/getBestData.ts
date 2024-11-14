"use server"

import { BestCreatorDatas } from "@/dummy/best/bestCreatorData"
import type { BestCreatorCursorListTypes } from "@/types/best/bestTypes"

interface FetchBestCreatorsParams {
	lastCreatedAt: string
	lastId: string
	pageSize: number
	page: number
}

export async function getBestCreatorData(
	params?: FetchBestCreatorsParams,
): Promise<BestCreatorCursorListTypes> {
	const _query = params
	const res: BestCreatorCursorListTypes = await BestCreatorDatas

	// const params = new URLSearchParams()
	// if (_query?.lastCreatedAt) params.append('lastCreatedAt', _query?.lastCreatedAt)
	// if (_query?.lastId) params.append('lastId', _query?.lastId)
	// if (_query?.pageSize) params.append('pageSize', _query?.pageSize.toString())
	// if (_query?.page) params.append('page', _query?.page.toString())

	// const fetchUrl = `${process.env.API_BASE_URL}/v1/creator/best?${params.toString()}`

	// try {
	//   const response = await fetch(fetchUrl, {
	//     method: 'GET',
	//     headers: {
	//       'Content-Type': 'application/json',
	//     },
	//     cache: 'no-cache',
	//   })

	//   if (!response.ok) {
	//     throw new Error('Network response was not ok')
	//   }
	//  const data: BestCreatorCursorListTypes = await response.json()
	//  return data
	// } catch (error) {
	//   console.error('Error:', error)
	//   return
	// }

	return res
}
