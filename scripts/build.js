/**
 * Builds the project using esbuild with the provided options.
 *
 * @param {Object} options - The configuration options for esbuild.
 * @returns {Promise<any>} A promise that resolves when the build is complete or exits the process on error.
 */
function build(options) {
    const isWatchMode = process.argv.includes('--watch');

    options = {
        logLevel: isWatchMode ? 'info' : 'warning',
        define: {
            'process.env.NODE_ENV': isWatchMode ? `'production'` : `'development'`
        },
        ...options
    };

    return require('esbuild').build(options).catch(() => process.exit(1));
}

/**
 * Immediately invoked function to execute the build process.
 * This function sets up the build options and initiates the build process.
 */
(async () => {
    await build({
        entryPoints: ['src/index.ts'],
        outfile: 'public/assets/index.esm.js',
        bundle: true,
        minify: true,
        platform: 'neutral'
    });
})();
