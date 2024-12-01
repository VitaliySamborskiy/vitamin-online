import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import {resolve} from  'path';

export default defineConfig({
    plugins: [[injectHTML()]],
    base: "/vitamin-online/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});