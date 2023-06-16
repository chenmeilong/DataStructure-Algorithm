
//法一 小顶堆 速度慢
/**
 * @param {number} n
 * @return {number}
 */

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     // 上移
//     siftUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         while(index>0 && this.heap[parentIndex]> this.heap[index]){
//             [this.heap[parentIndex], this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
//             index= parentIndex
//             parentIndex = Math.floor((index-1)/2)
//         }
//     }
//     //下沉  递归下移
//     siftDown(index){
//         let element = index
//         let left = index*2+1
//         let right = index*2+2


//         if(left<this.heap.length  && this.heap[element] > this.heap[left]){
//             element =  left 
//         }
//         if(right<this.heap.length  && this.heap[element] > this.heap[right]){
//             element =  right 
//         }
//         if(element != index){
//             [this.heap[element], this.heap[index]] = [this.heap[index],this.heap[element]]
//             this.siftDown(element)
//         }
//     }
    
//     // pop 取出顶最小值
//     pop(){
//         let top
//         if(this.heap.length!=1){
//             top  = this.heap[0]
//             while(this.heap[0]==top){
//                 this.heap[0] = this.heap.pop()
//                 this.siftDown(0)
//             }
//         }else{
//             top  = this.heap.pop()
//         }
//         return top
//     }
//     push(val){
//         this.heap.push(val)
//         this.siftUp(this.heap.length-1)
//     }
// }

// var nthUglyNumber = function(n) {
//     const minHeap = new MinHeap()
//     minHeap.push(1)
//     let min
//     for(let i =0 ; i<n ; i++){
//         min = minHeap.pop()
//         minHeap.push(min*2)
//         minHeap.push(min*3)
//         minHeap.push(min*5)
//     }
//     return min
// };

// 法二 动态规划
var nthUglyNumber = function(n) {
    let p2 = 1
    let p3 = 1
    let p5 = 1

    let arr = new Array(n+1).fill(0)
    arr[1] = 1

    for(let i=2 ; i <= n ; i++ ){
        arr[i] = Math.min(arr[p2]*2 , arr[p3]*3 ,arr[p5]*5)
        if(arr[i]==arr[p2]*2){
            p2++ 
        }
        if(arr[i]==arr[p3]*3){
            p3++
        }
        if(arr[i]==arr[p5]*5){
            p5++
        }
    }
    return arr[n]
};


console.log(nthUglyNumber(10))