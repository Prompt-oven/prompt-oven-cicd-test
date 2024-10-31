"use client"

import { Input } from "@repo/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@repo/ui/select"

export function ProfileFilterPrice({
	currency = "ETH",
	onCurrencyChange,
	minValue = "",
	maxValue = "",
	onMinChange,
	onMaxChange,
}: {
	currency?: string
	onCurrencyChange?: (value: string) => void
	minValue?: string
	maxValue?: string
	onMinChange?: (value: string) => void
	onMaxChange?: (value: string) => void
}) {
	return (
		<div className="space-y-4">
			<Select value={currency} onValueChange={onCurrencyChange}>
				<SelectTrigger className="w-full border-none bg-white/10 text-white">
					<SelectValue placeholder="Select currency" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="ETH">ETH</SelectItem>
					<SelectItem value="WETH">WETH</SelectItem>
				</SelectContent>
			</Select>
			<div className="flex gap-2">
				<Input
					type="number"
					placeholder="Min"
					value={minValue}
					onChange={(e) => onMinChange?.(e.target.value)}
					className="border-none bg-white/10 text-white placeholder:text-white/70"
				/>
				<Input
					type="number"
					placeholder="Max"
					value={maxValue}
					onChange={(e) => onMaxChange?.(e.target.value)}
					className="border-none bg-white/10 text-white placeholder:text-white/70"
				/>
			</div>
		</div>
	)
}

