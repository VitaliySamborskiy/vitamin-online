import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
	plugins: [[injectHTML()]],
	base: "/vitamin-online/",
	server: {
		open: true,
	},
	build: {
		outDir: "dist",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				404: resolve(__dirname, "404-section.html"),
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
			},
		},
	},
});
