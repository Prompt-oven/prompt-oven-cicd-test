import { RegisterOAuthMemberRequest, RegisterOAuthMemberResponse } from "@/types/auth/memberRegisterType.ts"
import { actionHandler } from "@/action/actionHandler.ts"


export const registerOauthMember = async (reqBody: RegisterOAuthMemberRequest) => {
	return actionHandler<RegisterOAuthMemberResponse>({
		name: "registerOauthMember",
		url: "/v1/auth/register-social",
		options: {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(reqBody),
			cache: "no-cache",
		},
	})
}