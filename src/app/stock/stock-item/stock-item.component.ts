/*
 * @Description: 股票组件
 * @Date: 2020-09-29 01:33:58 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-05 13:40:44 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  // TODO 把数据封装到一个模型类里，方便集中管理
  // 事件处理函数还是定义在组件中
  public stock: Stock;
  public stockClass: object; // 声明一个为对象的成员属性来保存类对象
  public positive = 'positive';
  constructor() {
    console.log('hello constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.stock = new Stock('Test Stock Company', 'TSC', 86, 90);
    // 初始化
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff) > 0.01;
    this.stockClass = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange, // 属性不符合JS的属性要求时，添加字符引号
      'small-change': !largeChange,
    };
  }

  reduce(): void {
    this.stock.previousPrice = this.stock.price;
    this.stock.price = (this.stock.price - 5);
  }

  add(): void {
    this.stock.previousPrice = this.stock.price;
    this.stock.price = (this.stock.price + 5);
  }

  toggleFavorite(event, param): void {
    console.log('用户点击了', event);
    console.log('函数参数', param);
    event.preventDefault();
    event.stopPropagation();
    this.stock.isFavorite = !this.stock.isFavorite;
  }
}
