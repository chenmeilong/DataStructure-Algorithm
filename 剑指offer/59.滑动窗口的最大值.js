/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//排序优化
//暴力解法 速度很慢
// var maxSlidingWindow = function(nums, k) {
//     let returnList = []
//     for(let i=0,j=k ; j<=nums.length ; i++,j++){
//         let max =  nums[i]
//         for(let x= i+1 ; x<j ;x++){
//             if(nums[x]>max) max = nums[x]
//         }
//         returnList.push(max)
//     }
//     return returnList
// };

//法一 大顶堆 核心：当堆顶不在窗口中，不断删除对顶的值，直到对顶在窗口中  O（nlogn）
// class MaxHeap{
//     constructor(){
//         this.heap =[]
//     }
//     //参数为 值和位置
//     push(value,index){
//         this.heap.push([value,index])
//         this.siftUp(this.heap.length-1)
//     }
//     //上移操作
//     siftUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         while(index>0 && this.heap[parentIndex][0]<this.heap[index][0]){
//             [this.heap[parentIndex],this.heap[index]] =[this.heap[index],this.heap[parentIndex]]
//             index = parentIndex
//             parentIndex = Math.floor((index-1)/2)
//         }
//     }
//     //下移操作
//     siftDown(index){
//         let element = index
//         const left = index*2+1
//         const right = index*2+2
//         if(left < this.heap.length && this.heap[element][0]<this.heap[left][0]){
//             element = left
//         }
//         if(right < this.heap.length && this.heap[element][0]<this.heap[right][0]){
//             element = right
//         }
//         if(index!=element){
//             [this.heap[index],this.heap[element]] = [this.heap[element],this.heap[index]]
//             this.siftDown(element)
//         }
//     }
//     //移除最大值
//     pop(){
//         this.heap[0] = this.heap.pop()
//         this.siftDown(0)  //重新找到栈顶
//     }
//     //找到最大值
//     max(){
//         return this.heap[0]
//     }
// }

// var maxSlidingWindow = function(nums, k) {
//     const heap = new MaxHeap()
//     for(let i =0 ; i< k ; i++){
//         heap.push(nums[i],i)
//     }
//     console.log(heap.heap)
//     let returnList = []
//     returnList.push(heap.max()[0])
//     // 核心：当堆顶不在窗口中，不断删除对顶的值，直到对顶在窗口中
//     for(let i = k ; i< nums.length ; i++){
//         // console.log('#',heap.heap)
//         heap.push(nums[i],i)
//         // console.log('###',heap.heap)

//         let max = heap.max()
//         while(max[1]<=i-k){
//             heap.pop() 
//             max = heap.max()
//         }
//         returnList.push(heap.max()[0])
//     }
//     return returnList
// };


//法二 单调队列  时间O（n） 空间O（k）
var maxSlidingWindow = function(nums, k) {
    const indexList =[]  //缓存的队列index  注意是index  且由大到小的顺序排列
    for(let i=0; i<k; i++){
        while(indexList.length && nums[i]>=nums[indexList[indexList.length-1]]){  //从队尾移除元素
            indexList.pop()
        }
        indexList.push(i)
    }
    // console.log(indexList)

    const returnList = [nums[indexList[0]]]
    for(let i=k; i<nums.length;i++){
        while(indexList.length && nums[i]>=nums[indexList[indexList.length-1]]){
            indexList.pop()
        }
        indexList.push(i)
        // 判断indexList[0] 是否还在窗口内  不在则shift这个元素 使用if条件移除
        if(indexList[0]<=i-k){
            indexList.shift()
        }
        returnList.push(nums[indexList[0]])
    }
    return returnList
};



console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
console.log(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6],5))