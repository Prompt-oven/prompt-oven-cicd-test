import React from "react"
import {
	Avatar as ShadcnAvatar,
	AvatarFallback,
	AvatarImage,
} from "@repo/ui/avatar"
import { User } from "@repo/ui/lucide"
import { cn } from "@/lib/utils"

interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof ShadcnAvatar> {
	size?: number
	src?: string
	alt?: string
}

export default function Avatar({
	size = 50,
	src,
	alt,
	className,
	...props
}: AvatarProps) {
	return (
		<ShadcnAvatar
			className={cn(
				"inline-flex items-center justify-center rounded-full",
				"border border-[#424242] bg-transparent",
				className,
			)}
			style={{ width: `${size}px`, height: `${size}px` }}
			{...props}>
			{src && (
				<AvatarImage
					src={src}
					alt={alt || "User avatar"}
					className="object-cover"
				/>
			)}
			<AvatarFallback className="bg-transparent">
				<User
					className="text-[#969696]"
					style={{ width: `${size * 0.6}px`, height: `${size * 0.6}px` }}
				/>
			</AvatarFallback>
		</ShadcnAvatar>
	)
}
