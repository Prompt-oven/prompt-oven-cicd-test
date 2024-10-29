import React from "react"

interface PromptThumbnailProps {
	imageUrl: string
	title: string
}

function PromptThumbnail({ imageUrl, title }: PromptThumbnailProps) {
	const defaultImageUrl =
		"https://assets.promptbase.com/DALLE_IMAGES%2FjpZeUIRoulZbjQ54szN73egJuYD2%2Fresized%2F1729019629483_500x500.webp?alt=media&token=5a7dc3bd-2af0-41f9-8310-1bcbdeacdc15"

	return (
		<img
			src={imageUrl || defaultImageUrl}
			alt={title}
			className="h-40 w-full rounded-t-lg object-cover"
		/>
	)
}

export default PromptThumbnail
