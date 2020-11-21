/*
 * @Description:
 * @Date: 2020-10-04 18:25:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-05 01:35:40 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core'
import { Stock } from '../../model/stock'

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock
  public confirm = false
  public exchanges = ['上交所', '深交所', '纽交所']
  constructor() {
  }

  ngOnInit(): void {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ')
  }
  setStockPrice(price): void {
    this.stock.price = +price
    this.stock.previousPrice = +price
  }
  createStock(): void {
    console.log('创建的股票是', this.stock)
  }
}
