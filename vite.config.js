import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    define: {
      __VITE_APP_HOST__: JSON.stringify(env.VITE_APP_HOST),
    },
    plugins: [
      laravel({
        input: ['resources/css/app.css', 'resources/js/app.tsx'],
        ssr: 'resources/js/ssr.jsx',
        refresh: true,
      }),
      react(),
      tailwindcss(),
    ],
    esbuild: { jsx: 'automatic' },
    server: {
      port: 5173,
      host: '0.0.0.0',
      watch: { usePolling: true },
      hmr: {
        protocol: 'ws',
        clientPort: 5173,
        host: env.VITE_APP_HOST,
      },
    },
  };
});
