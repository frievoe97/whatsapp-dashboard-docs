import { defaultTheme } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "vuepress-plugin-comment2";
import { searchPlugin } from "@vuepress/plugin-search";

module.exports = {
    locales: {
        '/documentation/': {
          lang: 'de-DE',
          title: 'Find Mr. X',
      description: 'Vue-powered Static Site Generator'
        },
        '/documentation/en/': {
          lang: 'en-US',
          title: 'Find Mr. X',
      description: 'Vue-powered Static Site Generator'
        },
      },
      theme: hopeTheme({

        title: 'Test',
        darkmode: 'toggle',
        backToTop: false,
        fullscreen: true,
        print: false,

        //Sets password for directories
        // encrypt: {
        //   config: {
        //     // This will encrypt the entire guide directory, and both passwords are available
        //     "/docs/": ["1234", "5678"],
        //     // This will only encrypt config/page.html
        //     "/config/page.html": "1234",
        //   },
        // },

        plugins: {
          mdEnhance: {
            presentation: true,
            tabs: true,
            tasklist: true,
            echarts: true,
            flowchart: true,
            align: true,
          },
        },


        locales: {
          '/documentation/': {
            selectLanguageName: 'German',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/docs/',
                },
                {
                  text: 'Installation',
                  link: '/installation/',
                },
                {
                  text: 'Presentation',
                  link: '/presentation/',
                },
              ],
              sidebar: {
                '/documentation/docs/': [
                  {
                    text: 'Documentation',
                    collapsible: false,
                    children: ['description',
                    'usage',
                    'components',
                    'tests',
                    'future'],
                  },
                ],
                '/documentation/installation/': [
                  {
                    text: 'Installation',
                    collapsible: false,
                  },
                ],
              },
          },
          '/documentation/en/': {
            selectLanguageName: 'English',
            navbar: [
                {
                  text: 'Documentation',
                  link: '/documentation/en/docs/',
                },
                {
                  text: 'Installation',
                  link: '/documentation/en/installation/',
                },
                {
                  text: 'Presentation',
                  link: '/documentation/en/presentation/',
                },

              ],
              sidebar: {
                '/documentation/en/docs/': [
                  {
                    text: 'Documentation',
                    collapsible: false,
                    children: ['description',
                    'usage',
                    'components',
                    'tests',
                    'future'],
                  },
                ],
                '/documentation/en/installation/': [
                  {
                    text: 'Installation',
                    collapsible: false,
                  },
                ],
              },
          },
        },
      }),
      plugins: [
        commentPlugin({
          provider: "Giscus",
          repo: "frievoe97/find-mr-x-docs",
          repoId: "R_kgDOI_nxNA",
          category:"General",
          categoryId:"DIC_kwDOI_nxNM4CUTuL"
        }),
        searchPlugin({
          // your options
        }),
      ],
}
