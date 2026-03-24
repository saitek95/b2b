import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { resolve } from 'path'
import fs from 'fs'

function htmlPartials() {
  return {
    name: 'html-partials',
    transformIndexHtml(html) {
      const header = fs.readFileSync(resolve(__dirname, 'src/partials/header.html'), 'utf-8')
      const footer = fs.readFileSync(resolve(__dirname, 'src/partials/footer.html'), 'utf-8')

      return html
        .replace(/<!--\s*@header\s*-->/g, header)
        .replace(/<!--\s*@footer\s*-->/g, footer)
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/svg')],
      symbolId: 'icon-[name]',
    }),
    htmlPartials(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})