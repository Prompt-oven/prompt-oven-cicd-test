"use client"

import Link from "next/link"
import type { FieldValues } from "react-hook-form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ErrorMessage } from "@hookform/error-message"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@repo/ui/dialog"
import { Button } from "@repo/ui/button"
import { CheckBox } from "@repo/ui/checkbox"
import { signIn } from "next-auth/react"
import SignInInput from "@/components/signIn/atom/SignInInput.tsx"
import { loginSchema } from "@/schema/auth.ts"

type SignInType = "google" | "kakao" | "naver"

export function SignInDialog() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	})

	const loginSchemaKeys = loginSchema.keyof().enum
	const handleOnSubmitSuccess = (data: FieldValues) => {
		// eslint-disable-next-line no-console -- This is a client-side only log
		console.log("login data - success : ", data)
		return true
	}
	const handleOnSubmitFailure = (error: FieldValues) => {
		// eslint-disable-next-line no-console -- This is a client-side only log
		console.log("login data - failure : ", error, errors)
		return true
	}

	const loginHandler = async (variant: SignInType) => {
		await signIn(variant)
	}

	return (
		<Dialog>
			<DialogTrigger>
				<div role="button">Open Login Modal</div>
			</DialogTrigger>
			<DialogContent className="gap-0 rounded border-none bg-[#252525] !px-5 !pb-8 !pt-12 md:!max-h-[780px] md:!min-h-[780px] md:!max-w-[650px] md:!px-10 md:!pb-16 md:!pt-24">
				<DialogHeader className="mb-5 flex h-fit flex-col justify-center gap-[5px] space-y-0 md:mb-0">
					<DialogTitle className="text-center text-3xl font-bold text-white">
						Sign In To Your Account
					</DialogTitle>
					<DialogDescription className="text-center text-sm text-[#C1C1C1]">
						Enter your details to access your account
					</DialogDescription>
				</DialogHeader>

				<form
					onSubmit={handleSubmit(handleOnSubmitSuccess, handleOnSubmitFailure)}>
					<div className="mb-11 flex h-fit w-full flex-col gap-5">
						<div>
							<SignInInput
								placeholder="Your Mail here"
								{...register(loginSchemaKeys.email)}
							/>
							<ErrorMessage
								name={loginSchemaKeys.email}
								errors={errors}
								render={(msg) => {
									return <p className="mt-1 text-red-500">{msg.message}</p>
								}}
							/>
						</div>
						<div>
							<SignInInput
								placeholder="Password"
								type="password"
								{...register(loginSchemaKeys.password)}
							/>
							<ErrorMessage
								name={loginSchemaKeys.password}
								errors={errors}
								render={({ message }) => (
									<p className="mt-1 text-red-500">{message}</p>
								)}
							/>
						</div>

						{/* Remember me and Forgot Password */}
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<CheckBox
									id="remember"
									className="h-[18px] w-[18px] rounded-none border-none !bg-[#333333] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] data-[state=checked]:bg-[#333333] data-[state=checked]:text-white"
								/>
								<label
									htmlFor="remember"
									className="cursor-pointer text-sm text-white">
									Remember me
								</label>
							</div>
							<Link
								href="/forgot-password"
								className="text-white hover:text-white/90">
								Forgot Password ?
							</Link>
						</div>
					</div>

					<div className="mb-8 flex h-fit w-full flex-col items-center gap-4">
						<Button
							type="submit"
							className="h-[50px] w-full rounded-[25px] !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90">
							Log In
						</Button>

						<p className="text-white/70">Or login with</p>

						{/* Social Login */}
						<div className="flex justify-center space-x-4">
							<Button
								type="button"
								variant="outline"
								className="h-[48px] w-[147px] rounded-full !bg-white hover:!bg-white/90"
								onClick={() => loginHandler("google")}>
								Google
							</Button>
							<Button
								type="button"
								variant="outline"
								className="h-[48px] w-[147px] rounded-full !bg-white hover:!bg-white/90"
								onClick={() => loginHandler("naver")}>
								{/*<NaverLogo className="mr-2" />*/}
								Naver
							</Button>
							<Button
								type="button"
								variant="outline"
								className="h-[48px] w-[147px] rounded-full !bg-white hover:!bg-white/90"
								onClick={() => loginHandler("kakao")}>
								Kakao
							</Button>
						</div>
					</div>

					{/* Sign up link */}
					<div className="h-fit text-center text-[#C1C1C1]">
						<span> Don&apos;t have an account ?</span>
						<Link
							href="/signup"
							className="ml-4 text-white hover:text-white/90">
							Create An Account
						</Link>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
