// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"model-viewer": "@google/model-viewer",
		},
	},
});
