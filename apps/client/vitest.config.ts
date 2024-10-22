import { defineConfig, configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		environment: "jsdom",
		exclude: [...configDefaults.exclude, "cypress/*"], // Cypress E2E 테스트 폴더 제외
	},
})
