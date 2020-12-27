/*
 * @Description:
 * @Date: 2020-12-27 23:59:58 +0800
 * @Author: JackChou
 * @LastEditTime: 2020-12-28 02:35:24 +0800
 * @LastEditors: JackChou
 */
import { Component } from '@angular/core'

@Component({
	selector: 'app-form-input',
	template: `
	<input [value]="userName" (change)="changeName($event)" type="text"/>
	<p>userName:{{userName}}</p>
	<input [ngModel]="age" (ngModelChange)="ngChange($event)"/>
	<p>age:{{age}}</p>
	<input [(ngModel)]="city"/>
	<p>city:{{city}}</p>
	`,
})
export class FormInputComponent {
	public userName = ''
	public age = ''
	city: ''
	constructor() { }
	changeName(event): void {
		this.userName = event.target.value
	}
	ngChange(age) {
		this.age = age
	}
}
