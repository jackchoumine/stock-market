/*
 * @Description: 根组件
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-09-29 02:33:30 +0800
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
}
