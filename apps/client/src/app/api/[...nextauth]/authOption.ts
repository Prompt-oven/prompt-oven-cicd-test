import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";
import { signInAction } from "@/app/action/auth/signInAction";
import type { AuthMemberType } from '@/types/auth/AuthMemberType';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        signinEmail: { label: "signinEmail", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"signinEmail" | "password", string> | undefined
      ): Promise<User | null> {
        if (!isCredentialsExist(credentials)) return null;

        const res = await signInAction({
					signinEmail: credentials?.signinEmail || "",
					password: credentials?.password || "", 
        });

        if (res.ok) {
          const signInReturn = await res.json() as AuthMemberType;
          return {
            ...signInReturn,
            id: signInReturn.nickname,
          } as User;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user: _user, account: _account, profile: _profile, email: _email, credentials: _credentials }) {
			return true;
		},
		async jwt({ token, user: _user }) {
			return { ...token, ..._user };
		},
		async session({ session, token }) {
			session.user = token;
			return session;
		},
	},
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
};

const isCredentialsExist = (
  credentials: Record<string, string> | undefined,
): boolean => {
  if (!credentials) return false;
  return Boolean(credentials.signinEmail && credentials.password);
};
