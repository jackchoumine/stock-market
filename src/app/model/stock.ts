/*
 * @Description: 股票模型
 * @Date: 2020-09-29 03:20:45 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-10-03 18:11:06 +0800
 * @LastEditors: JackChouMine
 */
export class Stock {
  isFavorite = false;
  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
  ) { }
  // TODO 这是什么语法
  isPositiveChange(): boolean {
    console.log('这是一个函数吗');
    return this.price >= this.previousPrice;
  }
}
