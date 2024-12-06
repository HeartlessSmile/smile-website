import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import path from 'path'
const guideRoute = require("./guide-route");
const projectRoute = require("./project-route");
const monitorRoute = require("./monitor-route");
const sourceRoute = require("./source-route");
const rustRoute = require("./rust-route");
const advancedRoute = require("./advanced-route");
export default defineUserConfig({
  // base:"/smile-website/",
  bundler: viteBundler(),
  theme: defaultTheme({
    // logo: '/logo.svg',
    navbar: [
      { text: '工程化入门', link: '/project/' },
      {
        text: '工程化进阶',
        prefix: '/advanced/',

        children: [
          { text: 'Rollup', link: 'rollup/' },
          { text: 'esbuild', link: 'esbuild/' },
          { text: 'Vite', link: 'vite/' },
        ],
      },
      { text: '代码规范', link: '/guide/' },
      { text: '源码分析', link: 'https://origin.duanhl.com/' },
      { text: '前端监控系统', link: '/monitor/' },
      // { text: "Rust学习指南", link: "/rust/guide/" },
      { text: 'GitHub', link: 'https://github.com/HeartlessSmile/smile-vuepress-site' },
    ],
    sidebar: {
      ...guideRoute,
      ...projectRoute,
      ...monitorRoute,
      ...sourceRoute,
      ...advancedRoute,
      ...rustRoute
    },
  }),
  lang: 'zh-CN',
  title: '前端工程化详解',
  description:
    '前端工程化详解;开箱即用的前端工程化方案;前端代码规范;使用过程中如碰到问题，请到Github进行提问。 https://github.com/HeartlessSmile/smile-vuepress-site',
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'logo.svg' },
    ],
  ],
})
