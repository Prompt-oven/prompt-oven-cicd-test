import React, { useEffect, useState } from "react"
import type { Control, FieldValues, Path } from "react-hook-form"
import { Controller } from "react-hook-form"
import ValidateButton from "../atom/ValidateButton"
import { Input } from "../atom/Input"

interface TimerInputProps<T extends FieldValues> {
	control: Control<T>
	name: Path<T> // name을 Path<T> 타입으로 지정
}

function TimerInput<T extends FieldValues>({
	control,
	name,
}: TimerInputProps<T>) {
	const [time, setTime] = useState("00:00")
	const [isCounting, setIsCounting] = useState(false)

	useEffect(() => {
		let timer: ReturnType<typeof setInterval> | null = null
		if (isCounting) {
			let minutes = 1
			let seconds = 0

			timer = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						if (timer) clearInterval(timer)
						setIsCounting(false)
						return
					}
					minutes--
					seconds = 59
				} else {
					seconds--
				}
				setTime(
					`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
				)
			}, 1000)
		}
		return () => {
			if (timer) clearInterval(timer)
		}
	}, [isCounting])

	const startCountdown = () => {
		setTime("01:00")
		setIsCounting(true)
	}

	return (
		<div>
			<label htmlFor={name}>E-mail validation</label>
			<div className="email-validation grid grid-cols-[10fr_2fr] gap-4 pt-2">
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<div className="relative w-full">
							<Input
								{...field}
								id={name}
								type="text"
								placeholder="Value"
								className="input w-full pr-12"
							/>
							<span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400">
								{time}
							</span>
						</div>
					)}
				/>
				<ValidateButton text="check" onClick={startCountdown} />
			</div>
		</div>
	)
}

export default TimerInput
