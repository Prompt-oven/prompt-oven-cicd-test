"use client"

import React from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import ValidateButton from "../atom/Button"
import LabelInput from "../molecule/LabelInput"

interface IFormInput {
	emailLocal: string
	emailDomain: string
	emailValidation: string
	password: string
	passwordConfirm: string
	nickname: string
	terms: boolean
}

const SignUpForm: React.FC = () => {
	const { control, handleSubmit } = useForm<IFormInput>()

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="signup--form">
			<h2 className="flex justify-center align-middle">Sign-up</h2>
			<div className="form--group py-2">
				<LabelInput label_name="email" />
				<div className="email--input">
					<Controller
						name="emailLocal"
						control={control}
						render={({ field }) => (
							<input
								{...field}
								type="text"
								placeholder="example"
								className="input"
							/>
						)}
					/>
					<span>@</span>
					<Controller
						name="emailDomain"
						control={control}
						render={({ field }) => (
							<input
								{...field}
								type="text"
								placeholder="etc.com"
								className="input"
							/>
						)}
					/>
					<ValidateButton text="validate" />
				</div>
			</div>

			{/* E-mail Validation */}
			<div className="form-group">
				<label>E-mail validation</label>
				<div className="email-validation">
					<Controller
						name="emailValidation"
						control={control}
						render={({ field }) => (
							<input
								{...field}
								type="text"
								placeholder="Value"
								className="input"
							/>
						)}
					/>
					<span>00:00</span>
					<ValidateButton text="check" />
				</div>
			</div>

			{/* Password */}
			<div className="form-group">
				<label>Password</label>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<input
							{...field}
							type="password"
							placeholder="Value"
							className="input"
						/>
					)}
				/>
			</div>

			{/* Password Confirm */}
			<div className="form-group">
				<label>Password confirm</label>
				<Controller
					name="passwordConfirm"
					control={control}
					render={({ field }) => (
						<input
							{...field}
							type="password"
							placeholder="Value"
							className="input"
						/>
					)}
				/>
			</div>

			{/* Nickname */}
			<div className="form-group">
				<label>Nickname</label>
				<div className="nickname-input">
					<Controller
						name="nickname"
						control={control}
						render={({ field }) => (
							<input
								{...field}
								type="text"
								placeholder="Value"
								className="input"
							/>
						)}
					/>
					<ValidateButton text="validate" />
				</div>
			</div>

			{/* Terms and Conditions */}
			<div className="form-group terms">
				<Controller
					name="terms"
					control={control}
					render={({ field }) => {
						const { onChange, onBlur, value, name, ref } = field
						return (
							<input
								type="checkbox"
								checked={value} // boolean 값을 checked로 관리
								onChange={(e) => onChange(e.target.checked)} // 체크박스 상태를 e.target.checked로 관리
								name={name}
								ref={ref}
								onBlur={onBlur}
							/>
						)
					}}
				/>
				<label>I accept the terms</label>
				<a href="#">Read our T&Cs</a>
			</div>

			{/* Submit Button */}
			<button type="submit" className="submit-button">
				Sign Up
			</button>
		</form>
	)
}

export default SignUpForm
