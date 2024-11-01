"use client"
// import PromptsTemplate from "@/components/prompts/template/PromptsTemplate"
import { useState } from "react"

export default function page() {
	const colors = [
		{ name: "Blue", value: "#3772FF" },
		{ name: "Purple", value: "#5D5FEF" },
		{ name: "Pink", value: "#EF5DA8" },
		{ name: "Red", value: "#FF4E4E" },
		{ name: "Green", value: "#21A85A" },
		{ name: "Mint", value: "#37FFC3" },
		{ name: "White", value: "#FFFFFF" },
	]
	const collections = [
		"Audioglyphs",
		"Autoglyphs",
		"CryptoCrystal",
		"CryptoArte",
		"CyberKongz",
	]
	return (
		<div className="flex h-[1000px] bg-[#000000]" id="prompts-list-page">
			<div
				className="w-[264px] rounded-lg bg-opacity-20 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] p-4"
				id="filter-leftbar">
				<h2 className="mb-4 font-medium text-white">FILTER BY</h2>

				<input id="search-input" />
				<div title="Category-Filter"></div>

				<div title="Status-filter"></div>

				<div title="Price-filter">
					<div className="space-y-4">
						<div className="flex gap-2"></div>
					</div>
				</div>

				<div title="Collection">
					{collections.map((collection) => (
						<div
							key={collection}
							className="flex items-center space-x-2"
							id="Collection-Filter">
							<div />
							<div className="text-sm text-white">{collection}</div>
						</div>
					))}
				</div>

				<div title="ColorFilter">
					<div className="flex flex-wrap gap-2">
						{colors.map((color) => (
							<button
								key={color.value}
								className="h-8 w-8 rounded-full"
								style={{ backgroundColor: color.value }}
							/>
						))}
					</div>
				</div>

				<div className="mt-4 flex gap-2">
					<button className="flex-1 bg-[#35314D] text-white hover:bg-[#35314D]/90">
						Clear
					</button>
					<button className="flex-1 bg-[#F24E1E] text-white hover:bg-[#F24E1E]/90">
						Apply
					</button>
				</div>
			</div>
			<div id="promptlists-rightbar">
				<div id="promptItemCard">
					<div id="prompt-thumbnail-image"></div>
					<div id="prompt-info-for-ItemCard">
						<div id="star-point"></div>
						<div id="promptName"></div>
						<div id="modelName"></div>
						<div id="prompt-price"></div>
					</div>
				</div>
			</div>
		</div>
	)
}
