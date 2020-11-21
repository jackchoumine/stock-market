/*
 * @Description: 项目入口
 * @Date: 2020-09-28 03:04:07 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-03 16:18:04 +0800
 * @LastEditors: JackChouMine
 */
import '@angular/compiler' // 不导入编译器，给组件添加属性时，报错
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
console.log('main.ts')

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
