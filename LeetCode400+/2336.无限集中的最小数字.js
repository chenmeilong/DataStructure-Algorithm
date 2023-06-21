var SmallestInfiniteSet = function() {
    // 应该将取出来的数做从小到大排序 并存起来
    this.queue = []
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    //取出最小值 其实就是 上面找到最小没有的整数  并添加到集合中去
    if(this.queue.length===0){
        this.queue.push(1)
        return 1
    }else{
        for(let i=0; i<this.queue.length;i++){
            if(i+1!==this.queue[i]){
                this.queue.splice(i,0,i+1)
                return i+1
            }
        }
    }
    this.queue.push(this.queue.length+1)
    return this.queue.length
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    // 从上面的集合中移除
    let index = this.queue.indexOf(num)
    if(index!==-1){
        this.queue.splice(index,1)
    }
    
};

small = new SmallestInfiniteSet();
small.addBack(2);    // 2 已经在集合中，所以不做任何变更。
console.log(small.popSmallest()); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
console.log(small.popSmallest()); // 返回 2 ，并将其从集合中移除。
// console.log(small.popSmallest()); // 返回 3 ，并将其从集合中移除。
// small.addBack(1);    // 将 1 添加到该集合中。
// console.log(small.popSmallest()); // 返回 1 ，因为 1 在上一步中被添加到集合中，
//                                    // 且 1 是最小的整数，并将其从集合中移除。
// console.log(small.popSmallest()); // 返回 4 ，并将其从集合中移除。
// console.log(small.popSmallest()); // 返回 5 ，并将其从集合中移除。