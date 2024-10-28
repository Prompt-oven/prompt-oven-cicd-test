"use server"

import type { loginSchemaType } from "../../../lib/schema/authSchema"

export async function signInAction(data: loginSchemaType): Promise<Response> {
	return await fetch(`localhost:4000`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		cache: "no-cache",
	})
}
