/*
 * @Description: 股票组件
 * @Date: 2020-09-29 01:33:58 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-09-29 02:24:49 +0800
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
  constructor() {
    console.log('hello constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 86;
    this.previousPrice = 80;
  }

}
