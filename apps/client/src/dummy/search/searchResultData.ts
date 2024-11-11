import type {
	SearchResultCreatorType,
	SearchResultPromptType,
} from "../../types/search/searchResultType"

// 검색 결과 - 크리에이터

export const searchResultCreatorData: SearchResultCreatorType[] = [
	{
		id: "c1",
		backgroundImg: "https://example.com/images/background1.jpg",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FSgMDFwI82YZrz5Pdy7Rwk6gr6BT2%2Fresized%2F1717758326123f_200x200.webp?alt=media&token=9e384c86-7835-4926-b61f-211c9b1eaa27",
		nickname: "clipcraft",
		rank: 32,
		rating: 4.7,
		follower: 1020,
	},
	{
		id: "c2",
		backgroundImg: "https://example.com/images/background2.jpg",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FjpZeUIRoulZbjQ54szN73egJuYD2%2Fresized%2F1711048326725o_200x200.webp?alt=media&token=513d704f-5f97-4caf-b8dc-d202cb1696de",
		nickname: "hawkeyepro",
		rank: 73,
		rating: 4.7,
		follower: 1785,
	},
	{
		id: "c3",
		backgroundImg: "https://example.com/images/background3.jpg",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FL6I297HGVwUTboiFkGKUhfOcamX2%2Fresized%2F1727459442954h_200x200.webp?alt=media&token=7fde7876-aacf-43bf-9c60-4f0b4906ec11",
		nickname: "promptlydesigned",
		rank: 150,
		rating: 4.5,
		follower: 390,
	},
	{
		id: "c4",
		backgroundImg: "https://example.com/images/background4.jpg",
		thumbnail:
			"https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FYCn63vG1tWgkVKcg2APQLDofp6u2%2Fresized%2F1687590023041_200x200.webp?alt=media&token=19b3fe44-6eac-4ba6-97b3-bfe1015aa6d8",
		nickname: "akynapriest",
		rank: 6,
		rating: 4.9,
		follower: 7034,
	},
]

// 검색 결과 - 프롬프트

export const searchResultPromptData: SearchResultPromptType[] = [
	{
		id: "p1",
		model: "GPT-4",
		title: "Party Organizator",
		rating: 4.8,
		price: "$15",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FZhPfrDO8heycS9szhXqF%2Fresized%2F1679600538759_500x500.webp?alt=media&token=6cb5286c-f963-49a1-842e-c84aa2629ea3",
	},
	{
		id: "p2",
		model: "Midjourney",
		title: "Cute Halloween Party Invitations",
		rating: 4.6,
		price: "$12",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FYzh1n5kDa1SehAjNVT2YdIIssDI3%2Fresized%2F1721927055846_500x500.webp?alt=media&token=66035655-fb92-4d77-9abc-d02962418791",
	},
	{
		id: "p3",
		model: "DALLE-2",
		title: "Golden Christmas Party Card Design",
		rating: 4.7,
		price: "$25",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FL6I297HGVwUTboiFkGKUhfOcamX2%2Fresized%2F1730658261517_500x500.webp?alt=media&token=55d7a938-2d5c-47ea-b75c-5edfa01685b3",
	},
	{
		id: "p4",
		model: "GPT-4",
		title: "Event Planning And Party Ideas",
		rating: 4.9,
		price: "$18",
		thumbnail:
			"https://assets.promptbase.com/DALLE_IMAGES%2FBDLjqDMKKax7U0SppYP9%2Fresized%2F1683502842498_500x500.webp?alt=media&token=cc87bfb3-3f42-42ae-b6dd-80904e5770b4",
	},
]
