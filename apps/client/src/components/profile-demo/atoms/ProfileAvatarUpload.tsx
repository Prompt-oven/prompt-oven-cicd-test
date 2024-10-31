import Image from "next/image"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ProfileDefaultAvatar from "@/components/common/atom/ProfileDefaultAvatar"

interface ProfileUploadProps {
	currentAvatar: string
}

interface UploadResponse {
	message: string
}

export default function ProfileAvatarUpload({
	currentAvatar,
}: ProfileUploadProps) {
	const [previewFile, setPreviewFile] = useState<Blob | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setPreviewFile(file) // Blob 객체를 저장
		}
	}

	const saveHandler = async () => {
		if (!previewFile) {
			return
		}
		try {
			const file = new File([previewFile], `${uuidv4()}.png`, {
				type: previewFile.type,
			})
			const formData = new FormData()
			formData.append("img", file)

			const result = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			}).then((res) => res.json() as Promise<UploadResponse>)

			if (result.message === "OK") {
				result.message
			}
		} catch (error) {
			error
		}
	}

	return (
		<div className="my-4 flex h-32 gap-4">
			<div className="relative w-32 overflow-hidden rounded-full border-2 border-white bg-[#2e4448]">
				{currentAvatar ? (
					<Image
						src={currentAvatar}
						sizes="500"
						fill
						style={{ objectFit: "cover" }}
						alt="Profile Banner"
						priority
					/>
				) : (
					<ProfileDefaultAvatar />
				)}
			</div>

			<label className="flex h-full w-32 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#1b1b1b]">
				<span className="text-white">+</span>
				<input
					type="file"
					className="hidden"
					onChange={handleFileChange}
					accept=".png, .jpg, .jpeg"
				/>
			</label>

			{previewFile ? (
				<>
					<Image
						src={URL.createObjectURL(previewFile)} // Blob 객체에서 URL 생성
						alt="Current Avatar"
						width={128}
						height={128}
						className="rounded-full"
					/>
					<div className="bg-white">
						<button type="button" onClick={saveHandler}>
							저장하기
						</button>
					</div>
				</>
			) : null}
		</div>
	)
}
