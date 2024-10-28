import MainHeader from "@/components/main/molecule/MainHeader.tsx"
import MainFooter from "@/components/main/molecule/MainFooter.tsx"

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<MainHeader />

			<MainFooter />
		</main>
	)
}
