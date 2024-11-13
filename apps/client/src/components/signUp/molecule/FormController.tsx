import React from "react"
import { Controller, Control, FieldValues, Path } from "react-hook-form"
import { Input } from "../atom/Input"

interface FormControllerProps<T extends FieldValues> {
	name: Path<T>
	control: Control<T>
	type: string
	placeholder: string
	className?: string
	onChange?: () => void
	id?: string
}

function FormController<T extends FieldValues>({
	name,
	control,
	type,
	placeholder,
	className = "input",
	onChange,
}: FormControllerProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Input
					{...field}
					type={type}
					placeholder={placeholder}
					className={className}
					onChange={(e) => {
						field.onChange(e)
						if (onChange) onChange()
					}}
				/>
			)}
		/>
	)
}

export default FormController
