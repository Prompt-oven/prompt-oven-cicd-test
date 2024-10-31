"use server"

import { profileDatas } from "@/dummy/profile/infoAndListDatas"
import { profileCountData } from "@/dummy/profile/reviewAndFollowData"
import type {
	ProfileInfoType,
	RegistProfileType,
	ReviewAndFollowType,
} from "@/types/profile/profileTypes"

export async function getReviewAndFollowCount(): Promise<ReviewAndFollowType> {
	function getProfileCountData(): Promise<ReviewAndFollowType> {
		return new Promise((resolve) => {
			// 비동기 작업 수행
			resolve(profileCountData)
		})
	}

	const res: ReviewAndFollowType = await getProfileCountData()

	//     const res = await fetch(`${process.env.API_BASE_URL}/v1/profile/count/{nickname}`, {
	//       method: 'GET',
	//       headers: {
	//         'Content-Type': 'application/json',
	//         Authorization: `Bearer ${auth.accessToken}`,
	//       },
	//       cache: 'no-cache',
	//     })

	return res
}

export async function getProfile(): Promise<ProfileInfoType> {
	function getProfileData(): Promise<ProfileInfoType> {
		return new Promise((resolve) => {
			// 비동기 작업 수행
			resolve(profileDatas)
		})
	}

	const res: ProfileInfoType = await getProfileData()

	//     const res = await fetch(`${process.env.API_BASE_URL}/v1/profile/{nickname}`, {
	//       method: 'GET',
	//       headers: {
	//         'Content-Type': 'application/json',
	//         Authorization: `Bearer ${auth.accessToken}`,
	//       },
	//     })

	return res
}

export async function registeProfile(registerProfileData: FormData) {
	"use server"

	const payload: RegistProfileType = {
		banner: registerProfileData.get("banner") as string,
		profileImage: registerProfileData.get("profileImage") as string,
		bio: registerProfileData.get("bio") as string,
		xId: registerProfileData.get("xId") as string,
		instagramId: registerProfileData.get("instagramId") as string,
		youtubeHandle: registerProfileData.get("youtubeHandle") as string,
		webLink: registerProfileData.get("webLink") as string,
		allowMessage: registerProfileData.get("allowMessage") === "on",
		acceptCustom: registerProfileData.get("acceptCustom") === "on",
	}

	// console.log("paylaod --> ", payload)

	payload

	// const res = await fetch(`${process.env.API_BASE_URL}/v1/profile/register`, {
	// 	method: "POST",
	// 	body: JSON.stringify(payload),
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		//   Authorization: `Bearer ${isAuth?.accessToken}`,
	// 	},
	// })

	// if (res.ok) {
	// 	return true
	// } else return false
	return null
}
