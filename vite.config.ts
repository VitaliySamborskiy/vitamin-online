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
				404: resolve(__dirname, "404.html"),
				textTemplate: resolve(__dirname, "src/pages/text-template.html"),
				placedOrder: resolve(__dirname, "src/pages/placed-order.html"),
				signIn: resolve(__dirname, "src/pages/forms.html"),
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
