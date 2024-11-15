"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"

interface AuthSessionProviderProps {
	children: ReactNode
	session?: Session
}

export function AuthSessionProvider({
	children,
	session,
}: AuthSessionProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>
}
