import { SignInDialog } from "@/components/signIn/organism/SignInDialog.tsx"

export default function page() {
	return (
		<section>
			<SignInDialog />
			<form>
				<input type="text" />
				<br />
				<input type="text" />
				<br />
				<input type="text" />
				<br />
			</form>
		</section>
	)
}
