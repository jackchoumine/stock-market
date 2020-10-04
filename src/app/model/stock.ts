/*
 * @Description: 股票模型
 * @Date: 2020-09-29 03:20:45 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-04 20:58:38 +0800
 * @LastEditors: JackChouMine
 */
export class Stock {
  isFavorite = false;
  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string = 'NYSE', // 交易所
  ) { }

  isPositiveChange(): boolean {
    console.log('这是一个函数吗');
    return this.price >= this.previousPrice;
  }
}
