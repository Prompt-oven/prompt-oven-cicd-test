import type { SignSchemaType } from '@/schema/AuthAccountSchema';

export async function signInAction(data: SignSchemaType): Promise<Response> {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!apiUrl) {
    throw new Error("API base URL is not defined. Check your environment variables.");
  }

  return fetch(`${apiUrl}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
}
