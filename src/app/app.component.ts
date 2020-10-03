/*
 * @Description: 根组件
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-03 17:56:53 +0800
 * @LastEditors: JackChouMine
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 组件标签
  templateUrl: './app.component.html', // 组件模板
  styleUrls: ['./app.component.scss']// 组件样式，使用 scss 文件
})
export class AppComponent {
  title = 'stock-market';
  author = 'jackChouMine';
  // tslint:disable-next-line: typedef
  stopPropagation(event, params) {
    console.log(event);
    console.log(params);
  }
}
