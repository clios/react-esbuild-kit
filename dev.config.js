require('esbuild')
  .build({
    bundle: true,
    entryPoints: ['src/index.jsx'],
    minify: false,
    outfile: 'dist/index.js',
    sourcemap: true,
    watch: true
  })
  .catch(() => process.exit(1))

require('fs-extra').copy('public', 'dist', (err) => {
  if (err) return console.error(err)
  console.log('public files was copied to dist folder')
})

require('live-server').start({
  file: 'index.html',
  host: 'localhost',
  open: true,
  port: 80,
  root: 'dist'
})
