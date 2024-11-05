"use client"
// import PromptsTemplate from "@/components/prompts/template/PromptsTemplate"
import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "@repo/ui/lucide"
import { Label } from "@repo/ui/radix-label"
import { RadioGroup, RadioGroupItem } from "@repo/ui/radio-group"
import { Input } from "@repo/ui/input"
import { Button } from "@repo/ui/button"

export default function Page() {
	const categories = [
		{ id: 1, name: "Art" },
		{ id: 2, name: "Fashion" },
		{ id: 3, name: "Music" },
		{ id: 4, name: "Video" },
		{ id: 5, name: "Games" },
		{ id: 6, name: "Sports" },
		{ id: 7, name: "Puppies" },
	]
	const colors = [
		{ name: "Blue", value: "#3772FF" },
		{ name: "Purple", value: "#5D5FEF" },
		{ name: "Pink", value: "#EF5DA8" },
		{ name: "Red", value: "#FF4E4E" },
		{ name: "Green", value: "#21A85A" },
		{ name: "Mint", value: "#37FFC3" },
		{ name: "White", value: "#FFFFFF" },
	]

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(true)
	// const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true)
	return (
		<div id="prompts-list-page">
			{/* 좌측 */}

			<div
				className="w-[264px] rounded-lg bg-opacity-20 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] p-4"
				title="filter-leftbar">
				{/* 서치 창 */}
				<div title="search-section" className="border-b border-white/10 py-4">
					<button type="button" className="mb-4">
						<span className="text-sm font-bold text-white">FILTER BY</span>
					</button>
					<div title="search-input-field" className="relative">
						<Input
							placeholder="Search"
							className="border-none bg-white/10 pl-10 text-white placeholder:text-white/70"
						/>
						<Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
					</div>
				</div>
				{/* 카테고리 섹션 */}
				<div title="category-section" className="border-b border-white/10 py-4">
					<button
						type="button"
						onClick={() => setIsCategoryOpen(!isCategoryOpen)}
						className="mb-4 flex w-full items-center justify-between text-white">
						<span className="text-sm font-bold">Category</span>
						{isCategoryOpen ? (
							<ChevronDown className="h-4 w-4 text-white/70" />
						) : (
							<ChevronUp className="h-4 w-4 text-white/70" />
						)}
					</button>
					{isCategoryOpen && (
						<RadioGroup title="Category-Filter" className="space-y-2">
							{categories.map((category) => (
								<div key={category.id} className="flex items-center space-x-2">
									<RadioGroupItem
										className="border-white/70 text-white"
										value={category.name}
										checked={selectedCategory === category.name}
										onChange={() => setSelectedCategory(category.name)}
									/>
									<Label
										className="mt-1 text-sm text-white"
										htmlFor={category.name}>
										{category.name}
									</Label>
								</div>
							))}
						</RadioGroup>
					)}
				</div>
				{/* 가격 섹션 */}
				<div title="price-section" className="border-b border-white/10 py-4">
					<h2 className="mb-4 font-medium text-white">Price</h2>

					<div className="space-y-4">
						<div className="flex gap-2">
							<Input
								type="number"
								placeholder="Min"
								className="border-none bg-white/10 text-white placeholder:text-white/70"
							/>
							<Input
								type="number"
								placeholder="Max"
								className="border-none bg-white/10 text-white placeholder:text-white/70"
							/>
						</div>
					</div>
					{/* 버튼 섹션 */}
					<div className="mt-4 flex gap-2">
						<Button
							variant="secondary"
							className="flex-1 bg-[#35314D] text-white hover:bg-[#35314D]/90">
							Clear
						</Button>
						<Button className="flex-1 bg-[#F24E1E] text-white hover:bg-[#F24E1E]/90">
							Apply
						</Button>
					</div>
				</div>

				{/* 색상 섹션 */}

				<div title="color-section" className="border-b border-white/10 py-4">
					<h2 className="mb-4 font-medium text-white">Filter By Color</h2>
					<div className="flex flex-wrap gap-2">
						{colors.map((color) => (
							<button
								key={color.value}
								className="h-8 w-8 rounded-full"
								style={{ backgroundColor: color.value }}
								type="button"
							/>
						))}
					</div>
				</div>
			</div>

			{/* 우측 */}
			<div title="promptlists-rightbar">
				<div title="selected-filter-lists">
					<div title="selected-filter-item">
						<div title="filter-name">In Auction</div>
						<div title="filter-value" />
						<div title="remove-filter-button">X</div>
					</div>
				</div>
				<div title="clear-all" className="text-red">
					Clear All
				</div>
				{/* 우측 프롬프트 카드 목록 */}
				<div title="promptItemCard">
					<div title="prompt-thumbnail-image" />
					<div title="item-tag" />
					<div title="prompt-info-for-ItemCard">
						<div title="star-point" />
						<div title="promptName" />
						<div title="modelName" />
						<div title="prompt-price" />
						<div title="cart-trigger-button" />
					</div>
				</div>
			</div>
		</div>
	)
}
