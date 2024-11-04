import type { PromptType } from "@/types/prompts/marketPlaceType"

const promptListData: PromptType[] = [
	{
		id: "1",
		liked: true,
		imageUrl: "https://via.placeholder.com/150",
		title: "Creative Writing Prompt",
		model: "GPT-4",
		price: 1500,
		inCart: false,
		example: [
			{
				type: "text",
				content: [
					"Prompt Details",
					"Model: GPT-4",
					"Token size: 531 ($0.02655 / call)",
					"Example input: [GENRE]: Fantasy, [LOCATION]: An ancient, mystical forest",
					"Example output: Eirwen Stormweaver, Age: 32, Gender: Female, Physical Description: Tall, silver-haired sorceress with piercing blue eyes.",
				],
			},
		],
	},
	{
		id: "2",
		liked: false,
		imageUrl: "https://via.placeholder.com/150",
		title: "Marketing Ad Ideas",
		model: "GPT-3.5",
		price: 2000,
		inCart: true,
		example: [
			{
				type: "image",
				content: [
					"https://via.placeholder.com/150/FF0000",
					"https://via.placeholder.com/150/00FF00",
					"https://via.placeholder.com/150/0000FF",
				],
			},
		],
	},
	{
		id: "3",
		liked: true,
		imageUrl: "https://via.placeholder.com/150",
		title: "Blog Content Generator",
		model: "GPT-3.5",
		price: 1200,
		inCart: false,
		example: [
			{
				type: "text",
				content: [
					"Prompt Details",
					"Model: GPT-3.5",
					"Example input: [TOPIC]: Health, [TARGET AUDIENCE]: Young adults",
					"Example output: '10 Tips for a Healthier Lifestyle in Your 20s.'",
				],
			},
		],
	},
	{
		id: "4",
		liked: false,
		imageUrl: "https://via.placeholder.com/150",
		title: "Social Media Post Ideas",
		model: "GPT-4",
		price: 1000,
		inCart: true,
		example: [
			{
				type: "image",
				content: [
					"https://via.placeholder.com/150/FFFF00",
					"https://via.placeholder.com/150/FF00FF",
				],
			},
		],
	},
]

export default promptListData
