import MainHeader from "@/components/main/molecule/MainHeader.tsx"
import MainFooter from "@/components/main/organism/MainFooter.tsx"
import ImageCarousel from "@/components/main/molecule/ImageCarousel.tsx"
import CategoryList from "@/components/main/molecule/CategoryList.tsx"
import NotableDrop from "@/components/main/molecule/NotableDrop.tsx"

const promptCategories = [
	{
		title: "3D Art",
		images: ["/img/main/art1.png", "/img/main/art2.png", "/img/main/art3.png"],
	},
	{
		title: "Digital Painting",
		images: [
			"/img/main/collectibles1.png",
			"/img/main/collectibles2.png",
			"/img/main/collectibles3.png",
		],
	},
	{
		title: "Stylized Art",
		images: ["/img/main/art1.png", "/img/main/art2.png", "/img/main/art3.png"],
	},
	{
		title: "Realistic Art",
		images: ["/img/main/art1.png", "/img/main/art2.png", "/img/main/art3.png"],
	},
	{
		title: "Music",
		images: ["/img/main/art1.png", "/img/main/art2.png", "/img/main/art3.png"],
	},
	{
		title: "Photography",
		images: ["/img/main/art1.png", "/img/main/art2.png", "/img/main/art3.png"],
	},
]

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-[#111111]">
			<MainHeader />
			<div className="flex w-full flex-col items-center justify-center gap-20 p-8">
				<ImageCarousel />
				<div className="py-10">
					<CategoryList categories={promptCategories} />
				</div>
				<div className="py-10">
					<NotableDrop
						tag="NEW"
						bgImage="/img/main/notableDrop1.png"
						title="Colourfull assests"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
						author={{
							name: "@robix2x2x",
							profile: "/img/main/notableDropAvatar1.png",
						}}
					/>
				</div>
			</div>
			<MainFooter />
		</main>
	)
}
