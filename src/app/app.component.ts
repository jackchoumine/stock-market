/*
 * @Description: 根组件
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-21 18:52:06
 * @LastEditors: JackChouMine
 */
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-root', // 组件标签
  templateUrl: './app.component.html', // 组件模板
  styleUrls: ['./app.component.scss'], // 组件样式，使用 scss 文件
  encapsulation: ViewEncapsulation.None, // 全局生效
})
export class AppComponent {
  title = 'stock-market'
  author = 'jackChouMine'
  public showTitle = true
  public howAreYou = ''
  public list = [{ tech: 'jquery', isGood: true }, { tech: 'angular', isGood: true },
  { tech: 'react', isGood: false }, { tech: 'vue', isGood: false }]
  // tslint:disable-next-line: typedef
  stopPropagation(event, params): void {
    console.log(event)
    console.log(params)
  }
  trackByMethod(index, item): number {
    console.log(index, item)
    return index + 1 + item
  }
}
