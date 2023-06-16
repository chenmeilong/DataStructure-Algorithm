// 剑指 Offer 09. 用两个栈实现队列

//用两个栈实现一个队列

var CQueue = function() {
    this.inStack=[]
    this.outStack=[]
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.outStack.length){
        //outStack没有东西 时进入
        if(!this.inStack.length){
            return -1
        }
        while(this.inStack.length){
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.pop()
};


var obj = new CQueue()
obj.appendTail(1)
obj.appendTail(2)
obj.appendTail(3)
console.log(obj.deleteHead())
console.log(obj.deleteHead())
console.log(obj.deleteHead())
console.log(obj.deleteHead())
