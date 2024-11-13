"use client"

import type { FieldValues } from "react-hook-form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ErrorMessage } from "@hookform/error-message"
import { Button } from "@repo/ui/button"
import { CheckBox } from "@repo/ui/checkbox"
import { Label } from "@repo/ui/label"
import { useEffect, useState } from "react"
import { signupSchema, signupSchemaObject } from "@/schema/auth.ts"
import SignUpInput from "@/components/auth/atom/SignUpInput.tsx"

// todo : 반복되는 컴포넌트 구조가 있는 부분은 공통화 시킬 수 있도록 리팩토링하기
function SignUpForm() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signupSchema),
		mode: "onChange",
	})

	const signUpSchemaKeys = signupSchemaObject.keyof().enum
	const email = watch(signUpSchemaKeys.email) as string
	const emailCode = watch(signUpSchemaKeys.emailCode) as string
	const nickName = watch(signUpSchemaKeys.nickname) as string

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

	// email validation
	const emailValidationHandler = () => {
		// todo : email validation Api 구현하기
		startTimer()
	}
	const emailCodeValidationHandler = () => {
		// todo : email code validation Api 구현하기
	}

	const emailValidationTime = 5 // 3 minutes in seconds
	const [timeLeft, setTimeLeft] = useState<number | null>(null)
	// eslint-disable-next-line no-undef -- This is a client-side only state
	const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (timeLeft === 0) {
			if (timerId) clearInterval(timerId)
			setTimerId(null)
		}
	}, [timeLeft, timerId])

	const startTimer = () => {
		if (timerId) clearInterval(timerId)
		setTimeLeft(emailValidationTime)
		const id = setInterval(() => {
			setTimeLeft((prev) => (prev !== null && prev > 0 ? prev - 1 : 0))
		}, 1000)
		setTimerId(id)
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
	}

	// nickname validation
	const nickNameValidationHandler = () => {
		// todo : nickname validation Api 구현하기
	}

	return (
		<div className="min-w-[500px] select-none gap-0 rounded border-none bg-[#252525] px-6 pb-12 pt-16 md:min-h-[780px] md:max-w-[650px] md:px-10 md:pb-16 md:pt-24">
			<div className="mb-5 flex h-fit flex-col justify-center gap-[5px] md:mb-14">
				<h1 className="text-center text-4xl font-bold text-white">
					Create Your Account
				</h1>
				<p className="text-center text-[16px] font-normal leading-[26px] text-[#C1C1C1]">
					Enter your details to create your account
				</p>
			</div>

			<form
				onSubmit={handleSubmit(handleOnSubmitSuccess, handleOnSubmitFailure)}>
				<div className="mb-11 flex h-fit w-full flex-col gap-5">
					{/* Email */}
					<div>
						<Label
							htmlFor="email"
							className="text-[14px] font-normal leading-[22px] text-[#C1C1C1]">
							Email
						</Label>
						<div className="relative flex min-w-full items-center gap-3">
							<SignUpInput
								containerProps={{ className: "w-full mt-1" }}
								id={signUpSchemaKeys.email}
								placeholder="Email"
								{...register(signUpSchemaKeys.email)}
							/>
							<Button
								disabled={Boolean(errors[signUpSchemaKeys.email]) || !email}
								type="button"
								onClick={emailValidationHandler}
								className="h-[50px] w-[90px] rounded !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90 disabled:bg-[#0F172A]/50">
								Validate
							</Button>
						</div>
					</div>

					{/* Email Validation */}
					{timeLeft !== null ? (
						<div className="relative">
							<div className="relative flex min-w-full items-center gap-3">
								<div className="relative flex-grow">
									<SignUpInput
										containerProps={{ className: "w-full" }}
										id={signUpSchemaKeys.emailCode}
										placeholder="Email Validation Code"
										{...register(signUpSchemaKeys.emailCode)}
									/>
									<div className="absolute right-4 top-1/2 -translate-y-1/2 text-base text-[#C1C1C1]">
										{formatTime(timeLeft)}
									</div>
								</div>
								<Button
									type="button"
									disabled={
										timeLeft === 0 ||
										Boolean(errors[signUpSchemaKeys.emailCode]) ||
										!emailCode
									}
									className="h-[50px] w-[90px] rounded !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90 disabled:bg-[#0F172A]/50"
									onClick={emailCodeValidationHandler}>
									Check
								</Button>
							</div>
						</div>
					) : null}

					{/* Password */}
					<div>
						<Label
							htmlFor="password"
							className="text-[14px] font-normal leading-[22px] text-[#C1C1C1]">
							Password
						</Label>
						<SignUpInput
							placeholder="Password"
							type="password"
							className="mt-1"
							id={signUpSchemaKeys.password}
							{...register(signUpSchemaKeys.password)}
						/>
						<ErrorMessage
							name={signUpSchemaKeys.password}
							errors={errors}
							render={({ message }) => (
								<p className="mt-1 text-red-500">{message}</p>
							)}
						/>
					</div>

					{/* password confirm */}
					<div>
						<Label
							htmlFor="password connfirm"
							className="text-[14px] font-normal leading-[22px] text-[#C1C1C1]">
							Password
						</Label>
						<SignUpInput
							placeholder="Password Confirm"
							type="password"
							className="mt-1"
							id={signUpSchemaKeys.passwordValidate}
							{...register(signUpSchemaKeys.passwordValidate)}
						/>
						<ErrorMessage
							name={signUpSchemaKeys.passwordValidate}
							errors={errors}
							render={({ message }) => (
								<p className="mt-1 text-red-500">{message}</p>
							)}
						/>
					</div>

					<div>
						<Label
							htmlFor="nickname"
							className="text-[14px] font-normal leading-[22px] text-[#C1C1C1]">
							Nickname
						</Label>
						<div className="relative flex min-w-full items-center gap-3">
							<SignUpInput
								type="text"
								containerProps={{ className: "w-full mt-1" }}
								id="nickname"
								placeholder="Nickname"
								{...register(signUpSchemaKeys.nickname)}
							/>
							<Button
								disabled={
									Boolean(errors[signUpSchemaKeys.nickname]) || !nickName
								}
								type="button"
								className="h-[50px] w-[90px] rounded !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90 disabled:bg-[#0F172A]/50"
								onClick={nickNameValidationHandler}>
								Validate
							</Button>
						</div>
					</div>

					{/* Remember me and Forgot Password */}
					<div className="flex items-center space-x-2">
						<CheckBox
							id="terms"
							className="h-[18px] w-[18px] rounded-none border-none !bg-[#333333] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] data-[state=checked]:bg-[#333333] data-[state=checked]:text-white"
						/>
						<Label
							htmlFor="terms"
							className="cursor-pointer text-sm text-white">
							I accept the terms
						</Label>
					</div>
				</div>

				<div className="mb-8 flex h-fit w-full flex-col items-center gap-4">
					<Button
						type="submit"
						className="h-[50px] w-full rounded-[25px] !bg-[#A913F9] text-white hover:!bg-[#A913F9]/90">
						Sign Up
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SignUpForm
