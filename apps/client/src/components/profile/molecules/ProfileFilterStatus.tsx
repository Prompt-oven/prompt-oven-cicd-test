"use client"

import { Checkbox } from "@repo/ui/checkbox"
import { Label } from "@repo/ui/label"

const statuses = ["Buy Now", "In Auction", "Looking to Sell", "Has Offers"]

export function ProfileFilterStatus({
	values = [],
	onChange,
}: {
	values?: string[]
	onChange?: (values: string[]) => void
}) {
	return (
		<div className="space-y-2">
			{statuses.map((status) => (
				<div key={status} className="flex items-center space-x-2">
					<Checkbox
						id={status}
						checked={values.includes(status)}
						onCheckedChange={(checked) => {
							if (checked) {
								onChange?.([...values, status])
							} else {
								onChange?.(values.filter((v) => v !== status))
							}
						}}
						className="border-white/70 text-white"
					/>
					<Label htmlFor={status} className="text-sm text-white">
						{status}
					</Label>
				</div>
			))}
		</div>
	)
}

