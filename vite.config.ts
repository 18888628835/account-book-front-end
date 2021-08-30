import { defineConfig } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, 'api'), // 将 /api 重写为空
      },
      '/public': {
        // 当遇到 /public 路径时，将其转换成 target 的值
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/public/, 'public'), // 将 /api 重写为空
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      public: path.resolve(__dirname, 'src/public'), // public 路径
      utils: path.resolve(__dirname, 'src/utils'), // utils 路径
      components: path.resolve(__dirname, 'src/components'), // components 路径
    },
  },
});
