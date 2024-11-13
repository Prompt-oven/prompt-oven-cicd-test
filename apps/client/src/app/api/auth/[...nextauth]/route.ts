import NextAuth from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- This is a valid assignment
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
