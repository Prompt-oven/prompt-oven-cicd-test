import Link from "next/link"
import React from "react"

export default function ProfileLinkToMarket() {
	return (
		<div className="my-12">
			<Link href="/marketplace">
				<div className="flex justify-center">
					<div className="w-96 rounded-md border border-white bg-[#1b1b1b] py-3 text-center text-white hover:text-gray-300 xl:w-72 2xl:w-60">
						<span className="mx-6">Browse Marketplace</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
