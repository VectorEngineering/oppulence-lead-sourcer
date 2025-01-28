import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.tsx',
    'icons/index': 'src/icons/index.tsx',
    'charts/index': 'src/charts/index.ts',
    'ui/index': 'src/ui/index.tsx',
    'hooks/index': 'src/hooks/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: [
    'react',
    'react-dom'
  ],
  esbuildOptions(options) {
    options.alias = {
      '@': './src'
    }
  }
})
