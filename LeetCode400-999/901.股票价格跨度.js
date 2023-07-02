
// 优化使用两个数组存储 key和value
var StockSpanner = function() {
    this.indexStack = [0]
    this.price = [Infinity]
};
StockSpanner.prototype.next = function(price) {
    while(this.price[this.indexStack[this.indexStack.length - 1]] <= price){
        this.indexStack.pop()
    }
    this.indexStack.push(this.price.length)
    this.price.push(price)
    return  this.indexStack[this.indexStack.length - 1]-this.indexStack[this.indexStack.length - 2]
}

let stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100));; // 返回 1
console.log(stockSpanner.next(80));;  // 返回 1
console.log(stockSpanner.next(60));;  // 返回 1
console.log(stockSpanner.next(70));;  // 返回 2
console.log(stockSpanner.next(60));;  // 返回 1
