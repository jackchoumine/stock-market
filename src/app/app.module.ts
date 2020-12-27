/*
 * @Description: 应用根模块
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-12-28 01:47:01 +0800
 * @LastEditors: JackChou
 */
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StockItemComponent } from './stock/stock-item/stock-item.component'
import { InputOutputComponent } from './stock/input-output/input-output.component'
import { CreateStockComponent } from './stock/create-stock/create-stock.component'
import { FormsModule } from '@angular/forms'
import { FormInputComponent } from './form-input/form-input.component';
@NgModule({
	declarations: [
		AppComponent,
		StockItemComponent,
		CreateStockComponent,
		InputOutputComponent,
		FormInputComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent], // 如何设置多个根组件？
})
export class AppModule { }
