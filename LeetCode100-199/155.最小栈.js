
//使用辅助栈
var MinStack = function() {
    this.stack = []
    this.minStack = []  //存放index
};
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    let index = this.stack.length-1
    let minIndex = this.minStack[this.minStack.length-1]
    if(this.minStack.length===0 || val<this.stack[minIndex]) this.minStack.push(index)
    else this.minStack.push(minIndex)
};
MinStack.prototype.pop = function() {
    this.minStack.pop()
    this.stack.pop()
};
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};
MinStack.prototype.getMin = function() {
    return this.stack[this.minStack[this.minStack.length-1]]
};

// 【不使用辅助栈的解法】
// 栈中每个元素代表的是要压入元素与当前栈中最小值的差值
// 有个很重要问题：
// 在弹出时如何维护min？
// 因为每次压入新的元素时，压入的都是与当前栈中最小值的差值（还未压入当前元素），故在弹出元素时，若弹出了当前最小值，因为栈中记录了当前元素与【之前】最小值的差值，故根据这个记录可以更新弹出元素后的最小值。
// 接下来看代码吧



const minStack = new MinStack()

minStack.push(-2)
minStack.push(0)
minStack.push(-3)

console.log(minStack.getMin())  

console.log(minStack.pop())
console.log(minStack.top())

console.log(minStack.getMin())  
