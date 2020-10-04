/*
 * @Description:
 * @Date: 2020-10-04 18:25:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-04 18:57:15 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  constructor() {
  }

  ngOnInit(): void {
    this.stock = new Stock('test', 'MyStock', 100, 90);
  }

}
