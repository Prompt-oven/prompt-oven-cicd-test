import type { HTMLProps } from "react"
import { forwardRef, useState } from "react"
import { Eye, EyeOff } from "@repo/ui/lucide"
import type { InputProps } from "@repo/ui/input"
import { Input } from "@repo/ui/input"
import ToggleIcon from "@/components/common/atom/ToggleIcon.tsx"

interface SignInInputProps extends InputProps {
	containerProps?: HTMLProps<HTMLDivElement>
}

const SignInInput = forwardRef<HTMLInputElement, SignInInputProps>(
	({ type = "text", containerProps = {}, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false)

		return (
			<div
				{...containerProps}
				className={`relative ${containerProps.className ?? ""}`}>
				<Input
					ref={ref}
					variant="login"
					type={
						// eslint-disable-next-line no-nested-ternary -- This is a nested ternary
						type !== "password" ? type : showPassword ? "text" : "password"
					}
					{...props}
					className={`${type === "password" ? "pr-10" : ""} ${props.className}`}
				/>
				{type === "password" && (
					<ToggleIcon
						show={showPassword}
						onClick={() => setShowPassword(!showPassword)}
						showIcon={<EyeOff className="h-5 w-5" />}
						hideIcon={<Eye className="h-5 w-5" />}
					/>
				)}
			</div>
		)
	},
)

SignInInput.displayName = "SignInInput"
export default SignInInput
