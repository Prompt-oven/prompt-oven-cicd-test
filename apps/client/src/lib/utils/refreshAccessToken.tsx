import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials" // CredentialsProvider를 직접 import

interface Token {
	refreshToken: string
	accessToken?: string
	accessTokenExpires?: number
	error?: string
}

const refreshAccessToken = async (token: Token) => {
	try {
		const response = await fetch(
			"http://localhost:8080/api/auth/refresh-token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					refreshToken: token.refreshToken,
				}),
			},
		)

		const refreshedTokens = await response.json()

		if (!response.ok) {
			throw refreshedTokens
		}

		return {
			...token,
			accessToken: refreshedTokens.accessToken,
			accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
			refreshToken: refreshedTokens.refreshToken ?? token.refreshToken, // 기존 리프레시 토큰 유지
		}
	} catch (error) {
		console.error("Error refreshing access token", error)

		return {
			...token,
			error: "RefreshAccessTokenError",
		}
	}
}

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				userEmail: { label: "userEmail", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				if (!credentials) {
					return null
				}
				const response = await fetch("http://localhost:8080/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: credentials.userEmail,
						password: credentials.password,
					}),
				})

				const user = await response.json()

				if (response.ok && user) {
					return user
				}

				return null
			},
		}),
	],
	// callbacks: {
	//   async jwt({ token, user, account }) {
	//     if (account && user) {
	//       return {
	//         accessToken: user.accessToken,
	//         accessTokenExpires: Date.now() + user.expiresIn * 1000,
	//         refreshToken: user.refreshToken,
	//         user,
	//       };
	//     }

	//     if (Date.now() < token.accessTokenExpires) {
	//       return token;
	//     }

	//     return refreshAccessToken(token as Token);
	//   },
	//   async session({ session, token }) {
	//     session.accessToken = (token as Token).accessToken;
	//     session.error = token.error;

	//     return session;
	//   },
	// },
})
