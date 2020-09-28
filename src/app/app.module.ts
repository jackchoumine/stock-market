/*
 * @Description: 应用根模块
 * @Date: 2020-09-28 03:04:08 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-09-29 01:47:06 +0800
 * @LastEditors: JackChouMine
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StockItemComponent} from './stock/stock-item/stock-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
