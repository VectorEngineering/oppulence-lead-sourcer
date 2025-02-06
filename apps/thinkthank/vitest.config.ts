import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths() as any],
    test: {
        dir: './tests',
        reporters: ['verbose'],
        globals: true,
        testTimeout: 50000,
        env: loadEnv('', process.cwd(), '')
    }
})
