import React, { useState } from "react"
import Image from "next/image"

export default function ProfileAvatarUpload() {
	const [_, setSelectedFile] = useState<File | null>(null)
	const [previewUrl, setPreviewUrl] = useState<string | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setSelectedFile(file)
			const url = URL.createObjectURL(file)
			setPreviewUrl(url)
		}
	}

	return (
		<div className="my-4 flex h-32 gap-4">
			<div className="h-full w-32 rounded-full border-2 border-white bg-green-400">
				<span className="text-white">Current Avatar</span>
			</div>
			<label className="flex h-full w-32 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#1b1b1b]">
				<span className="text-white">+</span>
				<input type="file" className="hidden" onChange={handleFileChange} />
			</label>

			{previewUrl && (
				<Image
					src={previewUrl}
					alt="Current Avatar"
					width={128}
					height={128}
					className="rounded-full"
				/>
			)}
		</div>
	)
}
