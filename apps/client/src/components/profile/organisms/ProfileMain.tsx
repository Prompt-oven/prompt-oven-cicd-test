"use client"

import React, { useState } from "react"
import ProfileSetting from "../molecules/ProfileSetting"
import ProfileSimpleInfo from "../molecules/ProfileSimpleInfo"
import ProfileEditInfo from "../molecules/ProfileEditInfo"

export default function ProfileMain() {
	const [isVisible, setIsVisible] = useState<boolean>(true)

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev)
	}

	return (
		<>
			{/* Background & Avartar */}
			<ProfileSetting
				isVisible={isVisible}
				toggleVisibility={toggleVisibility}
			/>

			{/* USER INFO */}
			{isVisible ? (
				<ProfileSimpleInfo isVisible={isVisible} />
			) : (
				<ProfileEditInfo />
			)}
		</>
	)
}
