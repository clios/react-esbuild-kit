require('esbuild')
  .build({
    bundle: true,
    entryPoints: ['src/index.jsx'],
    minify: true,
    outfile: 'dist/index.js',
    sourcemap: false,
    watch: false
  })
  .catch(() => process.exit(1))

require('fs-extra').copy('public', 'dist', (err) => {
  if (err) return console.error(err)
  console.log('public files was copied to dist folder')
})
