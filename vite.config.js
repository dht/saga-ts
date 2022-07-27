import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [dts({})],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'SagaTs',
            formats: ['es', 'umd'],
            fileName: (format) => `saga-ts.${format}.js`,
        },
        rollupOptions: {
            ...externals(p.dependencies),
        },
    },
});
