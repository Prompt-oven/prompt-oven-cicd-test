import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

//Date Formmat like -> at 2.45 PM
export const ReviewDateFormatted = (dateString: string) => {
	const date = new Date(dateString)
	const hours = date.getUTCHours()
	const minutes = date.getUTCMinutes()
	const ampm = hours >= 12 ? "PM" : "AM"
	const formattedHours = hours % 12 || 12
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
	return `at ${formattedHours}.${formattedMinutes} ${ampm}`
}
