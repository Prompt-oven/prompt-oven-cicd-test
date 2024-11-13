import { useEffect, useState } from "react"

interface UseAuthTimerProps {
	emailValidationTime?: number
}

type TimeLeftType = number | null
type StartTimerType = () => void

export const useAuthTimer = ({
	emailValidationTime = 180,
}: UseAuthTimerProps): [TimeLeftType, StartTimerType] => {
	const [timeLeft, setTimeLeft] = useState<TimeLeftType>(null)
	// eslint-disable-next-line no-undef -- This is a client-side only state
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (timeLeft === 0) {
			if (timerId) clearInterval(timerId)
			setTimerId(null)
		}
	}, [timeLeft, timerId])

	const startTimer = () => {
		if (timerId) clearInterval(timerId)
		setTimeLeft(emailValidationTime)
		const id = setInterval(() => {
			setTimeLeft((prev) => (prev !== null && prev > 0 ? prev - 1 : 0))
		}, 1000)
		setTimerId(id)
	}

	return [timeLeft, startTimer]
}
