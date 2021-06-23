import { defineConfig } from 'vite';
import vitePluginHtml from 'vite-plugin-html';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        }
    },
    publicDir: './src/configs',
    plugins: [
        reactRefresh(),
        antdViteImportPlugin(),
        vitePluginHtml({
            minify: true,
            inject: {
                injectData: {
                    title: 'vite-react-example',
                    injectScript: '<script src="/configs.js"></script>', // publicDir作为根目录
                },
                injectOptions: {
                    filename: './index.html', // 模板页
                }
            },
        }),
    ],
    server: {
        open: true,
        port: 10010,
    }
});