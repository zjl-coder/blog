const path = require('path');
const { defaultTheme } = require('@vuepress/theme-default');
const { searchPlugin } = require('@vuepress/plugin-search');
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top');
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom');
const { nprogressPlugin } = require('@vuepress/plugin-nprogress');
const { sidebar } = require('./sidebar');
const { navbar } = require('./navbar')

module.exports = {
  lang: 'zh-CN',
  title: '风时雨',
  description: '风时雨博客',
  base: '/blog/',
  dest: 'docs',
  open: true,
  theme: defaultTheme({
    contributors: false,
    navbar,
    sidebar,
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 100,
    }),
    backToTopPlugin(),
    externalLinkIconPlugin({
      locales: {
        '/': {
          openInNewWindow: 'open in new window',
        },
        '/zh/': {
          openInNewWindow: '在新窗口打开',
        },
      },
      externalLinkIcon: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    mediumZoomPlugin({}),
    nprogressPlugin(),
  ],
}

// __dirname  blog/src/.vuepress