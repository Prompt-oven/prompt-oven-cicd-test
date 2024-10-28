import React from "react"

interface SaleProps {
	width?: string | number
	height?: string | number
}

function Sale({ width = "50", height = "50" }: SaleProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_351_4565)">
				<path
					d="M46.1719 16.4453C51.2793 21.6211 51.2793 29.9414 46.1719 35.1172L35.2344 46.1817C34.3262 47.0996 32.8418 47.1094 31.9238 46.2012C30.9961 45.293 30.9961 43.8086 31.9043 42.8809L42.832 31.8262C46.1426 28.4766 46.1426 23.086 42.832 19.7363L30.3613 7.11622C29.4434 6.19532 29.4531 4.71192 30.3809 3.80177C31.2988 2.89161 32.7832 2.9004 33.6035 3.8213L46.1719 16.4453ZM14.0625 13.9746C14.0625 15.791 12.666 17.0996 10.9375 17.0996C9.21191 17.0996 7.8125 15.791 7.8125 13.9746C7.8125 12.334 9.21191 10.8496 10.9375 10.8496C12.666 10.8496 14.0625 12.334 14.0625 13.9746ZM40.1074 21.3574C42.5488 23.7988 42.5488 27.7637 40.1074 30.2051L27.0801 43.2324C24.6387 45.6739 20.6738 45.6739 18.2324 43.2324L1.83105 26.8262C0.658496 25.6543 0 24.0723 0 22.4121V7.81251C0 5.22364 2.09863 3.12501 4.6875 3.12501H19.2871C20.9473 3.12501 22.5293 3.78321 23.7012 4.95607L40.1074 21.3574ZM4.6875 7.72462V22.4121C4.6875 22.8223 4.85254 23.2227 5.14551 23.5156L21.5527 39.9219C22.1582 40.5371 23.1543 40.5371 23.7598 39.9219L36.7969 26.8848C37.4121 26.2793 37.4121 25.2832 36.7969 24.6777L20.3906 8.27052C20.0977 7.97755 19.6973 7.72462 19.2871 7.72462H4.6875Z"
					fill="url(#paint0_linear_351_4565)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_351_4565"
					x1="-3.36151"
					y1="-15.2508"
					x2="45.5411"
					y2="-6.90312"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#FCB808" />
					<stop offset="1" stopColor="#F9075E" />
				</linearGradient>
				<clipPath id="clip0_351_4565">
					<rect width="50" height="50" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default Sale
