import { Roboto, Sora } from "next/font/google"

export const sora = Sora({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-sora",
	display: "swap",
})

export const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700"],
	subsets: ["latin"],
	style: "normal",
	variable: "--font-roboto",
	display: "swap",
})
