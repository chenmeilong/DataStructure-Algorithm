//法一 单调队列  对象队列 时间复杂度是O（1）
var MaxQueue = function() {
    this.max = []    //单调栈
    this.maxIndex = 0  //单调队列的起始位置
    this.queue = []
    this.queueStart = 0
};
MaxQueue.prototype.max_value = function() {
    if(this.max.length-this.maxIndex<=0) return -1
    return this.queue[this.max[this.maxIndex]]
};
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    while((this.max.length-this.maxIndex)>0 &&  value >= this.queue[this.max[this.max.length-1]]){
        this.max.pop()
    }
    this.max.push(this.queue.length-1)   //存放index
};
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length-this.queueStart>0){
        this.queueStart++
        if(this.max[this.maxIndex]<this.queueStart){
            this.maxIndex++
        }
        return this.queue[this.queueStart-1]
    }else{
        return -1
    }
};


var obj = new MaxQueue()


obj.push_back(46)
console.log(obj.pop_front())
console.log(obj.max_value())   //理论上应该是-1
console.log(obj.pop_front())
obj.push_back(866)
console.log(obj.pop_front())
console.log(obj.pop_front())
console.log(obj.pop_front())
obj.push_back(525)
console.log(obj.pop_front())
console.log(obj.max_value())

