import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/*
 * @Description: 股票组件
 * @Date: 2020-09-29 01:33:58 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-09-29 03:19:34 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public isFavorite: boolean;
  constructor() {
    console.log('hello constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 86;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.isFavorite = false;
  }
  // tslint:disable-next-line: typedef
  toggleFavorite(event, param) {
    console.log('用户点击了', event);
    console.log('函数参数', param);
    this.isFavorite = !this.isFavorite;
    this.price = this.price - 20;
  }
}
