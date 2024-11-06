import { Button } from "@repo/ui/button"
import { ShoppingBag } from "@repo/ui/lucide"
import React from "react"

export default function PromptDetailGet() {
	return (
		<div>
			<Button className="h-[60px] rounded-full bg-gradient-to-r from-[#FC466B] to-[#AD20F2] text-lg font-semibold text-white">
				<ShoppingBag className="mx-2 h-5 w-5" />
				<span className="pr-2">GET PROMPT</span>
			</Button>
		</div>
	)
}
