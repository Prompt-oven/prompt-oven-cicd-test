import { Card } from "@repo/ui/card"

const LINKS = [
	{
		title: "Docs",
		href: "https://turbo.build/repo/docs",
		description: "Find in-depth information about Turborepo features and API.",
	},
	{
		title: "Learn",
		href: "https://turbo.build/repo/docs/handbook",
		description: "Learn more about monorepos with our handbook.",
	},
	{
		title: "Templates",
		href: "https://turbo.build/repo/docs/getting-started/from-example",
		description: "Choose from over 15 examples and deploy with a single click.",
	},
	{
		title: "Deploy",
		href: "https://vercel.com/new",
		description:
			"Instantly deploy your Turborepo to a shareable URL with Vercel.",
	},
]

export default function Page(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Home</h1>
			<div className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-zinc-800/30 bg-gradient-to-b from-inherit px-4 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 lg:p-4"></div>
			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				{LINKS.map(({ title, description }) => (
					<Card key={title} title={title}>
						{description}
					</Card>
				))}
			</div>
		</main>
	)
}
