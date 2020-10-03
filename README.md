# StockMarket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# 学习笔记

《angular 即学即用》是一本 ng 的入门指南，全书代码基于`angularJS 5.0.0`，全书专注所有 ng 开发人员都必须知道的内容，而不关注只对一部分人有用的内容。

代码仓库:[angular-up-and-running](https://github.com/shyamseshadri/angular-up-and-running)

学习的环境：

```bash
Angular CLI: 10.1.3
Node: 12.18.4
OS: win32 x64
npm: 6.14.6
angular core: 10.1.3
typescript: 4.0.3
```

## angular VS angular.js

> [Angular](https://angular.io/) (通常是指 "Angular 2+"或"Angular v2 及更高版本 ")[4][5] 是一个基于 TypeScript 的 开源 Web 应用框架 由 Google 的 Angular 团队以及社区共同领导。Angular 是由 AngularJS 的同一个开发团队完全使用`typescript`重写的。

> [AngularJS](https://angularjs.org/) 在 2009 年由 [Miško Hevery](https://github.com/mhevery) 和 [Adam Abrons](https://github.com/abrons) 开发，作为线上 JSON 储存服务的软体，它是以兆位元来计价，便于成为企业的应用服务。当初以 "GetAngular.com" 注册网域，但由于只有少量的注册用户，在两人决定放弃这个商业想法前，就把 Angular 开源了。Abrons 后来离开了这个计划，但在 Google 工作的 Hevery 和一些谷歌员工如 Igor Minár 和 Vojta Jína 等则继续开发维护此函式库。


> 因为版本问题，没有发布 angular 3 ,直接从 angular 2 到 angular 4。

> angular.js 从 2.0 开始，不再叫 angular.js ，也不叫angular 2、angular 4，就叫 angular。angular 团队计划每6个月发布一个大版本。学习 angluar，可不学习 angular.js。

在 angular 的第一个版本中的一些概念比如**数据绑定**、**关注分离**、**依赖注入**的，已经成为 web 框架的通用特性。

## hello angular

安装 `typescript`、`@angular/cli`：
```bash
npm i -g typescript @angular/cli
```

使用 ng 提供的命令行工具，可创建一个新项目

```bash
ng new <project-name>
```
> 创建项目时，安装依赖会非常慢，使用 `ng new <project-name> --skip-install` 跳过依赖安装，然后使用 `yarn` 安装依赖。

ng-cli（ng提供的命令行工具，官方不叫这个名字，我自己的说法）的使用：

三种框架都提供了生成项目的工具，这些工具为项目的初始化做了大量工作，是开发人员专注于业务的具体实现。

ng-cli 完成一下任务：

- 引导应用程序；
- 提供服务；
- 运行测试；
- 构建；
- 新建组件、服务、路由等。

<!-- TODO 具体有哪些命令？ -->
```bash
ng help
ng -h # 帮助信息
ng version # 查看版本
ng serve # 运行服务，会将 TS 转译成 JS,否则浏览器识别不了
```
项目的目录结构和vue等差不多，都有编辑器配置、依赖说明、tslint 规则等文件，主要关注 ng 特有的目录，`src` 目录内容如下：

```bash
F:.
│  index.html               # 根 html ，类似 vue 的 html 模板
│  main.ts                  # 应用入口
│  polyfills.ts             # 叠片代码
│  styles.scss              # 全局样式代码，可引入到其他样式文件中
│  test.ts                  # 测试代码
│  
├─app
│  │  app-routing.module.ts # 路由模块，创建是不选择路由，就没有
│  │  app.component.html    # 根组件的 html 代码
│  │  app.component.scss    # 根组件的样式文件
│  │  app.component.spec.ts # 根组件测试代码
│  │  app.component.ts      # 根组件
│  │  app.module.ts         # 主模块
│      
└─environments              # 环境配置目录
        environment.prod.ts
        environment.ts
```

在项目根目录中有一个 `angular.json`，这是项目配置，新建项目时选项不同，内容也不同，类似`vue.config.js`，供项目开发和构建时使用。

[angluar 规则区配置](https://angular.cn/guide/workspace-config)

### 各个文件的内容

**根 html **
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>StockMarket</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
  <!-- 根组件 -->
  <app-root></app-root>
</body>

</html>
```

`app-root` 这是一个自定义标签，是在根组件内指定的，根组件对应的标签叫根元素，它加载应用代码的标记。

在哪加载项目代码呢？

运行 `ng serve` 时，依赖库、程序代码、样式文件等应用资源会被打包成一个文件，动态插入到根 html 中，在浏览中访问 html，就和普通的页面一样。

**main.ts**

```ts
import { enableProdMode } from '@angular/core'; // 是 es6 语法导入依赖
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 环境检测
if (environment.production) {
  enableProdMode(); 
}
// 引导主模块
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

`main.ts` 是程序的入口，识别项目启动时加载的模块，还可修改项目级别的配置，类似 vue 中的 `main.js`。

