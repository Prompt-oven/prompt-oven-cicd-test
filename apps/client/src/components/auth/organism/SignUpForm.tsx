"use client"

import type { FieldValues } from "react-hook-form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@repo/ui/button"
import { CheckBox } from "@repo/ui/checkbox"
import { Label } from "@repo/ui/label"
import { signupSchema, signupSchemaObject } from "@/schema/auth.ts"
import SignUpField from "@/components/auth/molecule/SignUpField.tsx"
import SignUpTimerField from "@/components/auth/molecule/SignUpTimerField.tsx"
import { useAuthTimer } from "@/hooks/auth/useAuthTimer.ts"

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
	const [timeLeft, startTimer] = useAuthTimer({ emailValidationTime })

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
					<SignUpField
						showButton
						labelText="Email"
						labelProps={{
							htmlFor: signUpSchemaKeys.email,
						}}
						buttonText="Validate"
						buttonProps={{
							disabled: Boolean(errors[signUpSchemaKeys.email]) || !email,
							type: "button",
							onClick: emailValidationHandler,
						}}
						inputProps={{
							id: signUpSchemaKeys.email,
							placeholder: "Email",
							...register(signUpSchemaKeys.email),
						}}
						errorProps={{
							name: signUpSchemaKeys.email,
							errors,
						}}
					/>

					{/* Email Validation */}
					{timeLeft !== null ? (
						<SignUpTimerField
							inputProps={{
								id: signUpSchemaKeys.emailCode,
								placeholder: "Email Validation Code",
								...register(signUpSchemaKeys.emailCode),
							}}
							buttonProps={{
								type: "button",
								disabled:
									timeLeft === 0 ||
									Boolean(errors[signUpSchemaKeys.emailCode]) ||
									!emailCode,
								onClick: emailCodeValidationHandler,
							}}
							buttonText="Check"
							errorProps={{
								name: signUpSchemaKeys.emailCode,
								errors,
							}}
							timeLeft={timeLeft}
						/>
					) : null}

					{/* Password */}
					<SignUpField
						labelText="Password"
						labelProps={{
							htmlFor: signUpSchemaKeys.password,
						}}
						inputProps={{
							type: "password",
							id: signUpSchemaKeys.password,
							placeholder: "Password",
							...register(signUpSchemaKeys.password),
						}}
						errorProps={{
							name: signUpSchemaKeys.password,
							errors,
						}}
					/>

					{/* password confirm */}
					<SignUpField
						labelText="Password connfirm"
						labelProps={{
							htmlFor: "Password Confirm",
						}}
						inputProps={{
							type: "password",
							id: signUpSchemaKeys.passwordValidate,
							placeholder: "Password Confirm",
							...register(signUpSchemaKeys.passwordValidate),
						}}
						errorProps={{
							name: signUpSchemaKeys.passwordValidate,
							errors,
						}}
					/>

					{/* Nickname */}
					<SignUpField
						showButton
						labelText="Nickname"
						labelProps={{
							htmlFor: signUpSchemaKeys.nickname,
						}}
						buttonText="Validate"
						buttonProps={{
							disabled: Boolean(errors[signUpSchemaKeys.nickname]) || !nickName,
							type: "button",
							onClick: nickNameValidationHandler,
						}}
						inputProps={{
							type: "text",
							id: signUpSchemaKeys.nickname,
							placeholder: "Nickname",
							...register(signUpSchemaKeys.nickname),
						}}
						errorProps={{
							name: signUpSchemaKeys.nickname,
							errors,
						}}
					/>

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
