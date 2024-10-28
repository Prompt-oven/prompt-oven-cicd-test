import React from "react"

interface SimpleInfoProps {
	isVisible: boolean
}

export default function ProfileSimpleInfo({ isVisible }: SimpleInfoProps) {
	return (
		<div className={`mb-10 mt-32 ${isVisible ? "" : "hidden"}`}>
			<div className="mx-8 mb-4 flex items-center">
				<span className="font-bold text-white">@name</span>
			</div>

			<ul className="mx-8 flex gap-8 text-sm text-white">
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">0</span>reviews
					</p>
				</li>
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">0</span>following
					</p>
				</li>
				<li className="flex gap-1">
					<p>
						<span className="mr-2 font-bold">0</span>followers
					</p>
				</li>
			</ul>
		</div>
	)
}
