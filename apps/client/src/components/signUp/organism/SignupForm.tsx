"use client"

import Link from "next/link"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { SubmitHandler } from "react-hook-form"
import { userAccountSchema } from "@/schema/AuthAccountSchema"
import type { UserAccountType } from "@/schema/AuthAccountSchema"
import FormController from "../molecule/FormController"
import ValidateButton from "../atom/ValidateButton"
import SignupButton from "../atom/SignupButton"
import TimerInput from "../molecule/TimerInput"
import { useRouter } from "next/navigation"
import { signUpAction } from "@/app/action/auth/signUpAciton"

function SignUpForm() {
	const router = useRouter()

	const {
		control,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<UserAccountType>({
		resolver: zodResolver(userAccountSchema),

		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			nickname: "",
			terms: false,
		},
	})

	const handleValidate = async (field: "email" | "nickname") => {
		const isValid = await trigger(field)
		if (isValid) {
			// 유효성 검증 로직 추가 예정
			void 0
		}
	}

	const onSubmit: SubmitHandler<UserAccountType> = async (data) => {
		try {
			const response = await signUpAction(data)

			if (response.ok) {
				router.push("/") // 성공 시 메인 페이지로 이동
			} else {
				// 상태 코드 확인 및 사용자 친화적 에러 메시지 표시
				switch (response.status) {
					case 400:
						alert("입력한 정보가 올바르지 않습니다. 다시 확인해주세요.")
						break
					case 401:
						alert("인증이 실패했습니다. 다시 시도해주세요.")
						break
					case 500:
						alert("서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
						break
					default:
						alert("회원가입에 실패했습니다. 다시 시도해주세요.")
				}
			}
		} catch (error) {
			alert((error as Error).message) // 네트워크 또는 기타 오류
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex min-h-screen flex-col items-center">
			<h5 className="flex justify-center py-10 align-middle">Sign-up</h5>
			<div className="flex flex-col items-center">
				<label htmlFor="email">E-mail</label>
				<div className="py-2">
					<div className="grid grid-cols-[10fr_2fr] gap-4">
						<FormController
							name="email"
							control={control}
							type="text"
							placeholder="example"
							className="input"
							id="email"
						/>
						<ValidateButton
							text="validate"
							onClick={() => handleValidate("email")}
						/>
					</div>
					{errors.email && (
						<p className="text-red-500">{errors.email.message}</p>
					)}
				</div>
				<div>
					<TimerInput<UserAccountType> control={control} name="emailValidate" />
				</div>

				{/* Password */}
				<label htmlFor="password" className="pt-2">
					Password
				</label>
				<div className="flex flex-col justify-between py-2">
					<FormController
						name="password"
						control={control}
						type="password"
						placeholder="Password"
						onChange={() => {
							trigger("password")
						}}
						id="password"
					/>
					{errors.password && (
						<p className="text-red-500">{errors.password.message}</p>
					)}
				</div>

				{/* Password Confirm */}
				<label htmlFor="passwordConfirm" className="pt-2">
					Password confirm
				</label>
				<div className="flex flex-col py-2">
					<FormController
						name="passwordConfirm"
						control={control}
						type="password"
						placeholder="Confirm Password"
						onChange={() => {
							trigger("password")
						}}
						id="passwordConfirm"
					/>
					{errors.passwordConfirm && (
						<p className="text-red-500">{errors.passwordConfirm.message}</p>
					)}
				</div>

				{/* Nickname */}
				<label htmlFor="nickname" className="form-group py-2">
					Nickname
				</label>
				<div className="grid grid-cols-[10fr_2fr] gap-4">
					<FormController
						name="nickname"
						control={control}
						type="text"
						placeholder="Nickname"
						id="nickname"
					/>
					<ValidateButton
						text="validate"
						onClick={() => handleValidate("nickname")}
					/>
				</div>
				{errors.nickname && (
					<p className="text-red-500">{errors.nickname.message}</p>
				)}

				{/* Terms Checkbox */}
				<div className="flex items-center gap-2">
					<Controller
						name="terms"
						control={control}
						render={({ field }) => (
							<input
								type="checkbox"
								checked={field.value}
								onChange={(e) => field.onChange(e.target.checked)}
								name={field.name}
								ref={field.ref}
								id="terms"
								className="mr-2"
							/>
						)}
					/>
					<label htmlFor="terms" className="flex items-center gap-1">
						<span>I accept the terms</span>
						<Link href="#" className="text-blue-500 underline">
							Read our T&Cs
						</Link>
					</label>
				</div>
				{errors.terms && <p className="text-red-500">{errors.terms.message}</p>}

				{/* Submit Button */}
				<SignupButton text="Sign UP" onSubmit={handleSubmit(onSubmit)} />
			</div>
		</form>
	)
}

export default SignUpForm
