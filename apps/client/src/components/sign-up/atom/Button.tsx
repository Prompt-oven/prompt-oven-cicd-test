import React from "react"
import { Button } from "../../../../../../packages/ui/src/Button"

interface ValidateButtonProps {
	text: string
}

function ValidateButton({ text }: ValidateButtonProps) {
	return <Button>{text}</Button>
}

export default ValidateButton
