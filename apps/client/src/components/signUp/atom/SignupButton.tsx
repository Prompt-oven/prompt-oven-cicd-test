import React from "react"
import { Button } from "@repo/ui/button"

interface ValidateButtonProps {
	text: string
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
}

function SignupButton({ text }: ValidateButtonProps) {
	return <Button>{text}</Button>
}

export default SignupButton
