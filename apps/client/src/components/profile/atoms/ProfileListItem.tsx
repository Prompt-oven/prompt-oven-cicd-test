import React from "react"

export default function ProfileListItem({ itemName }: { itemName: string }) {
	return (
		<div className="relative flex h-full flex-col bg-transparent">
			<div className="border-1 absolute left-1 top-1 rounded-sm border-black bg-white text-base xl:text-sm 2xl:text-xs">
				<span className="mx-1">category</span>
			</div>
			<div className="flex-grow bg-blue-300">-</div>
			<div className="flex justify-between bg-green-300 text-base xl:text-sm 2xl:text-xs">
				<span className="ml-1">{itemName}</span>
				<span className="mr-1">price</span>
			</div>
		</div>
	)
}
