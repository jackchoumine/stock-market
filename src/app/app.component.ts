/*
 * @Description: 根组件
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-22 01:33:07
 * @LastEditors: JackChouMine
 */
import { Component, ViewEncapsulation, OnInit} from '@angular/core'

@Component({
  selector: 'app-root', // 组件标签
  templateUrl: './app.component.html', // 组件模板
  styleUrls: ['./app.component.scss'], // 组件样式，使用 scss 文件
  encapsulation: ViewEncapsulation.None, // 全局生效
})
export class AppComponent implements OnInit{
  public title = ''
  author = 'jackChouMine'
  public showTitle = true
  public howAreYou = ''
  public list = [
   { tech: 'jquery', isGood: true },
   { tech: 'angular', isGood: true },
   { tech: 'react', isGood: false },
   { tech: 'vue', isGood: false }]
    public jack = {name: 'jack', age: 26}
    ngOnInit(): void{
      this.title = '这是来自父组件的数据'
    }
  stopPropagation(event, params): void {
    console.log(event)
    console.log(params)
  }
  trackByMethod(index, item): number {
    console.log(index, item)
    return index + 1 + item
  }
  handler({title, person}): void{
    console.log('监听到自定义事件')
    console.log(title, person)
    this.title = title
    this.jack = person
  }
  changeAge(): void{
    this.jack.age += 10
  }
  changePerson(): void{
    this.jack = {name: '杰克大爷', age: 80}
  }
  changeItemOfList(): void{
    this.list[2].isGood = !this.list[2].isGood // Default 父子组件都能更新 OnPush 子组件不更新
  }
  changeList(): void{
    this.list  = []// Default OnPush 父子组件都能更新
    // this.list.push({tech: 'node', isGood: true})// Default 父子组件都能更新 OnPush 子组件不更新
    // this.list[2] = {tech: 'node', isGood: true}// Default 父子组件都能更新 OnPush 子组件不更新
  }
}
