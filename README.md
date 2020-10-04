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

**main.ts** -- 项目入口

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


`app.modules.ts` 主模块

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

// TS 注解，将该定义为一个 ng 模块
@NgModule({
  declarations: [ // 声明用到的组件和指令
    AppComponent,
    StockItemComponent
  ],
  imports: [ // 用到的其他模块
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 启动项目时的入口组件
})
export class AppModule { }
```

主模块是应用程序特定代码开始的地方，是应用的核心配置，加载依赖、声明应用用到的组件、标记根组件等，都在这里配置。

> declarations 定义了该模块中允许在 html 里使用的组件。任何组件都必须在使用前声明。

> imports 导入用到的其他库，从而使用这些库中功能。

> bootstrap 指定应用的根组件，如果没有根组件，应用不会启动。

<!-- TODO 可以用多个根组件吗？设置多个根组件，页面上并没有显示第二个根组件。 -->

<!-- TODO 模块和组件的区别？ -->


**app.component.ts** 根组件

```ts
import { Component } from '@angular/core';

// 装饰器，指定如何转为 HTML 代码
@Component({
  selector: 'app-root', // 组件标签，使用组件时的标签名字
  templateUrl: './app.component.html', // 组件模板
  styleUrls: ['./app.component.scss']// 组件样式，使用 scss 文件
})
export class AppComponent { // 组件类，包含成员和函数
  title = 'stock-market';
  author = 'jackChouMine';
}
```

`selector`，指定使用组件时用的标签；
`templateUrl`，指定组件的 html 代码，类似 vue 中的 template，可使用行内模板。

```ts
@Component({
  template: `<div style="text-align: center;"></div>`,
})
```

模板内容：

```html
<div style="text-align: center;">
  <h1>
    hello {{title}}
  </h1>
  <h2>my name is {{author}}</h2>
  <app-stock-item></app-stock-item>
</div>
```
`{{}}` 是插入语法，用来绑定组件中的数据，内部是一个 JS 表达式。

`<app-stock-item></app-stock-item>` 是我们定义的子组件，稍后会是创建的方法。

`styleUrls`，指定组件样式，不用担心组件之间的样式相互影响。

> 指定多个样式文件，属性冲突时，优先级是怎样的？

<!-- TODO  -->
会按照 CSS 样式的层叠特性应用到元素上。

组件类---定义组件的数据和函数。
```ts
export class AppComponent { // 组件类，包含成员和函数
  title = 'stock-market';
  author = 'jackChouMine';
}
```

组件类有双重职责：
- 呈现数据；
- 处理组件的事件。

### 总结

ng 项目的文件组织方式和相关配置。

## 创建组件

用 `ng g component file/component-name` 可创建一个组件，file 指定组件的文件，不指定文件夹，会在 app 文件里创建，component-name 是组件名字。

`ng g` 是 `ng generate` 的缩写，可创建组件、`angular元素`:接口、服务、模块等；

执行该命令，会生成组件定义文件（ts文件）、模板文件、样式文件和单元测试文件，同时还会自动导入到主模块中，应用就能识别它了。
导入主模块，然后在 declarations 中声明。

> 以上过程都可手动完成。

创建组件时，遵循一些惯例：

- 文件名以组件名开头，后面是元素类型，最后是扩展名。

比如 `stock-item.component.ts`，这样方便我们队文件进行分组和识别。

我们定义好的组件：

```ts
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  // TODO 把数据封装到一个模型类里，方便集中管理
  // 事件处理函数还是定义在组件中
  public stock: Stock;
  constructor() {
    console.log('hello constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.stock = new Stock('Test Stock Company', 'TSC', 86, 90);
  }
  // tslint:disable-next-line: typedef
  toggleFavorite(event, param) {
    console.log('用户点击了', event);
    console.log('函数参数', param);
    this.stock.isFavorite = !this.stock.isFavorite;
  }
}
```

`selector: 'app-stock-item'` 组件使用的选择器（自定义标签）,注意`app-`，这是组件前缀，ng 自动添加的，除非里另外指定名字。

如何指定？

```ts
export class StockItemComponent implements OnInit {}
```
`StockItemComponent` 类实现 `OnInit` 接口。

组件有一些生命周期函数，在特定时期执行某些操作，比如初始化、视图被呈现、销毁等。

在组件创建和 data 字段都被初始化之后，`OnInit` 函数执行，一般在此函数中做初始化工作，这样容易测试其余功能，而不是每次都触发初始化。

`ngOnInit` -- 当你想进入组件的初始化阶段，需要实现`OnInit` 接口，然后在组件中实现`ngOnInit`函数，就可以在该函数中执行初始化工作了。

`成员变量` -- 组件的状态。我们将组件的数据封装成一个独立的类，并在 `ngOnInit` 进行创建一个实例。

```ts
this.stock = new Stock('Test Stock Company', 'TSC', 86, 90);
```
> 数据之间有依赖关系，如何实现像 vue 中的计算属性？

### 组件的数据绑定

使用`{{}}`插值语法绑定标签的内容，即设置 `textContent` 属性？

`[]` 绑定 DOM 属性，`[class]="stock.isPositiveChange?'positive':'negative'"`，这样淡定的类不会覆盖原来的类，而是追加一个类。

`{{}}` 、`[]` 是组件到 UI 模板的单向绑定。

> HTML 属性 和 DOM 属性的区别？

DOM 属性和 HTML 属性有交集，比如 HTML ID 直接映射到 DOM 的 ID，但有的属性只存在两者之一，比如 `defaultValue` 只存在 input DOM 中。

HTML 属性往往做 DOM 元素的初始化，初始化之后，HTML 的渲染效果，是 DOM 控制的。

> ng 绑定是 DOM 属性，而不是 HTML 属性。

`<input type="text" value="foo" />` 这个 html input 元素，会初始化一个 DOM 元素，即 input DOM 的 value 为 foo. 在输入 `bar`，

`input.getAttribute('value')` 的值为 foo，是 HTML 中的初始化值，而 `input.value` 会返回 `bar`，这是 DOM 元素中的值，当前值。

### 组件处理事件

事件是组件和用户交互的主要方式，组件处理事件必不可少。事件处理语法：

```ts
 (eventName) = "handleCall([$event[,otherParams]])"
```
`$event`可获取到触发的**事件对象**，`$` 不能省略，是可选的，还可添加其他参数。
在类中实现该函数。

> 容易犯的错误是**不加括号**。

```html
<button (click)="toggleFavorite($event,'otherParam')">{{stock.isFavorite?'已经购入':"购入"}}</button>
```

```ts
  toggleFavorite(event, param) {
    console.log('用户点击了', event);
    console.log('函数参数', param);
    this.stock.isFavorite = !this.stock.isFavorite;
  }
```
> 如何阻止默认行为？
```ts
event.preventDefault();
```
同样，阻止事件冒泡 `event.stopPropagation();`

### 总结

学习了组件的组织方式、插值语法、DOM 属性绑定和事件绑定。

## 表单处理

表单接收用户输入，UI更新，同时希望组件内部的数据也跟着变化，就要实现双向绑定。

ng 实现双向绑定的方式有两种：① 事件处理 ② 内置指令 `@ngModel`

1. 事件处理

思路是监听表单事件，获取到该元素，然后把用该元素的值更新组件中的状态。

```html
 <input type="text" placeholder="请输入股票名字" [value]="stock.name" (input)="stock.name=$event.target.value">
```

2. 内置指令 ngModel

