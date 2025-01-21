import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		target: 'esnext', // ESM을 유지하기 위한 설정
		minify: 'esbuild', // ESBuild를 통해 모듈 처리
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
