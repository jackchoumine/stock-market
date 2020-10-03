/*
 * @Description: 股票组件
 * @Date: 2020-09-29 01:33:58 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-03 16:44:13 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss',]
})
export class StockItemComponent implements OnInit {
  // TODO 把数据封装到一个模型类里，方便集中管理
  // 事件处理函数还是定义在组件中
  public stock: Stock;
  constructor() {
    console.log('hello constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.stock = new Stock('Test Stock Company', 'TSC', 86, 90);
  }
  // tslint:disable-next-line: typedef
  toggleFavorite(event, param) {
    console.log('用户点击了', event);
    console.log('函数参数', param);
    this.stock.isFavorite = !this.stock.isFavorite;
  }
}
