import React, { type SVGProps } from "react"

interface AccountSvgProps extends SVGProps<SVGSVGElement> {
	width?: string | number
	height?: string | number
}

function AccountSvg({
	width = "50",
	height = "50",
	...props
}: AccountSvgProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M44.5312 3.125C45.8301 3.125 46.875 4.1748 46.875 5.46875C46.875 6.7627 45.8301 7.8125 44.5312 7.8125H8.59375C6.43652 7.8125 4.6875 9.56152 4.6875 11.7188V38.2812C4.6875 40.4395 6.43652 42.1875 8.59375 42.1875H41.4062C43.5645 42.1875 45.3125 40.4395 45.3125 38.2812V21.0938C45.3125 18.9355 43.5645 17.1875 41.4062 17.1875H11.7188C10.4199 17.1875 9.375 16.1426 9.375 14.8438C9.375 13.5449 10.4199 12.5 11.7188 12.5H41.4062C46.1523 12.5 50 16.3477 50 21.0938V38.2812C50 43.0273 46.1523 46.875 41.4062 46.875H8.59375C3.84766 46.875 0 43.0273 0 38.2812V11.7188C0 6.97266 3.84766 3.125 8.59375 3.125H44.5312ZM34.375 29.6875C34.375 27.959 35.7715 26.5625 37.5 26.5625C39.2285 26.5625 40.625 27.959 40.625 29.6875C40.625 31.416 39.2285 32.8125 37.5 32.8125C35.7715 32.8125 34.375 31.416 34.375 29.6875Z"
				fill="url(#paint0_linear_351_4555)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_351_4555"
					x1="-3.36134"
					y1="-15.25"
					x2="45.5389"
					y2="-6.90289"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#FCB808" />
					<stop offset="1" stopColor="#F9075E" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default AccountSvg
