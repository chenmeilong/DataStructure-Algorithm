// 自己写的二分查找 O(N)
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.list =[]
    this.middle =null
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    //二分查找 到指定的位置 插入num
    if(this.list.length>0){
        if(num >= this.list[this.list.length-1]){
            this.list.push(num)
        }else if(num <= this.list[0]){
            this.list.unshift(num)
        }else{
            //使用二分查找到合适的位置，插入数据
            let i=0
            let j = this.list.length - 1
            let m
            while(i<j){
                m = Math.floor((i+j)/2)
                if(this.list[m]>num){
                    j = m-1
                }else{
                    i = m+1
                }
            }
            
            if(this.list[i]< num){
                this.list.splice(i+1,0,num)
            }else{
                this.list.splice(i,0,num)
            }

        }
        //计算中间值的值
        if(this.list.length%2==0){
            this.middle = (this.list[Math.floor(this.list.length/2)-1]+this.list[Math.floor(this.list.length/2)])/2
        }
        if(this.list.length%2==1){
            this.middle = this.list[Math.floor(this.list.length/2)]
        }
    }else{
        this.list.push(num)
        this.middle = num 
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.middle
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder()
obj.addNum(6)
obj.addNum(10)
obj.addNum(2)
obj.addNum(6)
obj.addNum(5)
obj.addNum(0)
obj.addNum(6)
obj.addNum(3)
obj.addNum(1)
obj.addNum(0)
obj.addNum(0)
var param_2 = obj.findMedian()  //返回中位数的值
console.log(param_2)
