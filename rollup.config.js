import typescript from 'rollup-plugin-typescript';

export default {
    entry: 'src/ts/main.ts',
    format: 'iife',
    dest: 'public/app.js',
    plugins: [
        typescript()
    ]
};
