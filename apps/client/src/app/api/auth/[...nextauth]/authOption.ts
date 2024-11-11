// eslint-disable-next-line import/no-named-as-default -- This is a server-side only import
import CredentialsProvider from "next-auth/providers/credentials"
import type { Awaitable, NextAuthOptions, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 24 * 60 * 60, // 1 day
		updateAge: 24 * 60 * 60, // 24 hours
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "LoginId", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize(): Awaitable<User | null> {
				return null
			},
		}),
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID || "",
			clientSecret: process.env.NAVER_CLIENT_SECRET || "",
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID || "",
			clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		signIn({ user, account, profile, email, credentials }) {
			// eslint-disable-next-line no-console -- This is a server-side only log
			console.log("signIn :", user, account, profile, email, credentials)
			return true
		},
		jwt({ token, user }) {
			// eslint-disable-next-line no-console -- This is a server-side only log
			console.log("jwt ------ \n\n jwt :", token, user)
			return { ...token, ...user }
		},
		session({ session, token }) {
			session.user = token
			// eslint-disable-next-line no-console -- This is a server-side only log
			console.log("session ---- \n\n session :", session)
			// eslint-disable-next-line no-console -- This is a server-side only log
			console.log("token :", token)
			return session
		},
	},
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
		// redirect: "/shop/main"
	},
}
