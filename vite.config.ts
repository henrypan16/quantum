import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://192.168.0.20:8080/",
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: [
			{ find: "@ui", replacement: "/src/components/ui" },
			{ find: "@components", replacement: "/src/components" },
			{ find: "@utils", replacement: "/src/utils" },
			{ find: "@layouts", replacement: "/src/layouts" },
		],
	},
});
