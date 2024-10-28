import MainHeader from "@/components/main/molecule/MainHeader.tsx"
import ImageCarousel from "@/components/main/molecule/ImageCarousel.tsx"

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<MainHeader />
			<div className="flex h-[1000px] w-full items-center justify-center p-8">
				<ImageCarousel />
			</div>
		</main>
	)
}
