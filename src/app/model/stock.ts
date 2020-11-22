/*
 * @Description: 股票模型
 * @Date: 2020-09-29 03:20:45 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-22 15:46:19
 * @LastEditors: JackChouMine
 */
export class Stock {
	isFavorite = false
	constructor(
		public name: string,
		public code: string,
		public price: number,
		public previousPrice: number,
		public exchange: string = 'NYSE' // 交易所
	) { }

	isPositiveChange(): boolean {
		return this.price >= this.previousPrice
	}
}
