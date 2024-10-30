"use client"

import * as React from "react"
import { ChevronDown } from "@repo/ui/lucide"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@repo/ui/select"

// todo -- API 적용 시 적용할 API type에 맞게 수정하기, 중복되는 SelectItem map 함수로 처리하기
export default function Selector() {
	return (
		<Select>
			<SelectTrigger className="h-[50px] min-w-[170px] max-w-[180px] rounded-[10px] border-none bg-[#1B1B1B] px-5 text-[15px] text-[#969696] focus:ring-0 focus:ring-offset-0 [&>svg]:hidden">
				<div className="flex w-full items-center justify-between">
					<SelectValue placeholder="Default sorting" />
					<ChevronDown className="h-4 w-4 shrink-0 text-[#969696]" />
				</div>
			</SelectTrigger>
			<SelectContent className="min-w-[170px] max-w-[180px] rounded-[10px] border-none bg-[#1B1B1B] text-[15px] text-[#969696]">
				<SelectGroup>
					<SelectItem
						value="default"
						className="focus:bg-[#2B2B2B] focus:text-[#969696]">
						Default sorting
					</SelectItem>
					<SelectItem
						value="price-low"
						className="focus:bg-[#2B2B2B] focus:text-[#969696]">
						Price: Low to High
					</SelectItem>
					<SelectItem
						value="price-high"
						className="focus:bg-[#2B2B2B] focus:text-[#969696]">
						Price: High to Low
					</SelectItem>
					<SelectItem
						value="newest"
						className="focus:bg-[#2B2B2B] focus:text-[#969696]">
						Newest
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
