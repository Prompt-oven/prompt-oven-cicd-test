interface MemberNameProps {
	hashTag: string | undefined
	nickname: string
	email: string | undefined
	joined: string
}

export default function ProfileModifyName({
	hashTag,
	nickname,
	email,
	joined,
}: MemberNameProps) {
	return (
		<div className="text-sm text-white">
			<p className="mb-2 flex gap-2 text-sm font-semibold">
				{hashTag ? `#${hashTag}` : "No HashTag"}
			</p>
			<p className="flex flex-col gap-0 text-[10px] sm:flex-row md:gap-4">
				<span className="font-semibold">@{nickname}</span>
				<span className="text-[#e5d9f2]">{joined}</span>
			</p>
			<p className="text-[10px]">{email ? email : "No Email"}</p>
		</div>
	)
}
