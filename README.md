# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


```
sad_project
├─ 📁.vscode																#编辑器配置
├─ 📁public																	#静态资源
├─ 📁src																		#主文件
│  ├─ 📁components													#子组件
│  │  ├─ 📁common														#通用组件
│  │  ├─ 📁layout														#布局
│  │  └─ 📁student													#学生模块子组件
│  ├─ 📁router															#路由
│  ├─ 📁static															#静态资源
│  ├─ 📁store																#状态管理（pinia）
│  ├─ 📁utils																#封装好的工具类
│  ├─ 📁views																#页面
│  │  ├─ 📁company													#公司页面
│  │  ├─ 📁employee													#员工页面
│  │  │  ├─ 📁pages													#子路由
│  │  │  │  ├─ 📁executer										#执行人页面
│  │  │  │  ├─ 📁manager										#经理页面
│  │  │  │  └─ 📁staff											#现场工作人员页面
│  │  ├─ 📁login														#登录注册页面
│  │  ├─ 📁myinfo														#个人信息页面
│  │  └─ 📁student													#学生页面
│  ├─ 📄App.vue															#根组件
│  ├─ 📄index.css														#导入TailwindCss
│  └─ 📄main.js															#入口文件
├─ 📄.gitignore
├─ 📄README.md
├─ 📄index.html
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄pnpm-lock.yaml
├─ 📄postcss.config.cjs
├─ 📄tailwind.config.cjs
└─ 📄vite.config.jss
```