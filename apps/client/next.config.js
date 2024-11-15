/** @type {import('next').NextConfig} */
module.exports = {
	env: {
		AWS_REGION: process.env.AWS_REGION,
		BUCKET: process.env.BUCKET,
		AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
		AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
		NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
		KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
		KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
	},
	reactStrictMode: true,
	transpilePackages: ["@repo/ui"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "promptoven.s3.ap-northeast-2.amazonaws.com",
				port: "",
				pathname: "/dummy/**",
			},
			{
				protocol: "https",
				hostname: "promptoven.s3.ap-northeast-2.amazonaws.com",
				port: "",
				pathname: "/client/**",
			},
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				port: "",
				pathname: "/v0/b/**",
			},
			{
				protocol: "https",
				hostname: "assets.promptbase.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

