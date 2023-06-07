import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {defineConfig} from 'vite';
import {viteSingleFile} from 'vite-plugin-singlefile';

export default defineConfig({
    ...baseViteConfig,
    plugins: [viteSingleFile({removeViteModuleLoader: true})],
});
