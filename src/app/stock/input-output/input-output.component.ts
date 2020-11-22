/*
 * @Description:
 * @Date: 2020-11-21 22:22:16
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-22 17:56:11
 * @LastEditors: JackChouMine
 */
import { Component, OnInit, Input , Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'
import {  OnChanges, SimpleChanges,  DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core'
// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
	selector: 'app-input-output',
	template: `
 <div>
  <h1>你好</h1>
  <div>{{title}}</div>
  <div>{{person.name}}</div>
  <div>{{person.age}}</div>
  <ul>
    <ng-container *ngFor="let item of tech">
      <li *ngIf="item.isGood">
        {{item.tech}}
      </li>
    </ng-container>
  </ul>
  <button (click)="changeItemOfList()">修改list的元素</button>
  <button (click)="changeList()">修改list</button>
  <button (click)="onEventEmitter($event,'你好')">触发自定义事件</button>
  <button (click)="changeAge()">修改年纪</button>
  <button (click)="changePerson()">修改person</button>
 </div>
  `,
	// changeDetection: ChangeDetectionStrategy.Default, // 父组件修改复杂输入的属性 ，子组件更新
	changeDetection: ChangeDetectionStrategy.OnPush, // 父组件修改复杂输入的属性，子组件不会更新
	// Default OnPush 子组件修改属性，父子组件都更新 子组件重置输入，父组件不会更新
})
export class InputOutputComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
 @Input() private tech: any
 @Input() public title: string
 @Input() public person: {name: string, age: number}
 @Output() private eventName: EventEmitter < {title: string, person: {name: string, age: number}} > // 声明输出的类型：事件
 private age = 20
 constructor(){
		this.eventName = new EventEmitter<{title: string, person: {name: string, age: number}}>() // 初始化事件对象
		console.log('子组件 类初始化')
 }
	ngOnChanges(changes: SimpleChanges): void {
			console.log('子组件 ngOnChanges')
			console.log('参数', changes)
		}
	ngOnInit(): void{
			console.log('子组件 ngOnInit')
	}
		ngDoCheck(): void{
			console.log('子组件 ngDoCheck')
		}
		ngAfterViewInit(): void{
			console.log('子组件 ngAfterViewInit')
		}
		ngAfterViewChecked(): void{
			console.log('子组件 ngAfterViewChecked')
		}
		ngAfterContentInit(): void{
			console.log('子组件 ngAfterContentInit')
		}
		ngAfterContentChecked(): void{
			console.log('子组件 ngAfterContentChecked')
		}
		ngOnDestroy(): void{
			console.log('子组件 ngDoDestroy')
		}
 onEventEmitter(event, hello): void{
		// 调用 emit 触发事件
		this.person.age = ++this.age
		this.eventName.emit({title: this.age + '', person: this.person})
 }
 changeAge(): void{
		this.person.age += 5
 }
 changePerson(): void{
		this.person = {age: 50, name: '杰克大叔'}
 }
 changeItemOfList(): void{
		this.tech[2].isGood = !this.tech[2].isGood // OnPush Default 父子组件都能更新
	}
	changeList(): void{
		// this.tech  = [] // Default OnPush 父组件不更新
		// this.tech.push({tech: 'node', isGood: true}) // OnPush Default 父子组件都能更新
		this.tech[2] = {tech: 'node', isGood: true} // OnPush Default 父子组件都能更新
	}
}
