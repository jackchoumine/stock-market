/*
 * @Description:
 * @Date: 2020-11-21 22:22:16
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-21 23:46:55
 * @LastEditors: JackChouMine
 */
import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core'
@Component({
  selector: 'app-input-output',
  template: `
 <div>
  <h1>你好</h1>
  <div>{{title}}</div>
  <div>{{person.name}}</div>
  <div>{{person.age}}</div>
  <button (click)="onEventEmitter($event,'你好')">触发自定义事件</button>
 </div>
  `,
})
export class InputOutputComponent {
 @Input() public title: string
 @Input() public person: {name: string, age: number}
 @Output() private eventName: EventEmitter<{title: string, person: {name: string, age: number}}> // 声明输出的类型：事件
 constructor(){
   this.eventName = new EventEmitter<{title: string, person: {name: string, age: number}}>() // 初始化事件对象
 }
 private age = 20
 onEventEmitter(event, hello): void{
   // 调用 emit 触发事件
   this.eventName.emit({title: ++this.age + '', person: this.person})
 }
}
