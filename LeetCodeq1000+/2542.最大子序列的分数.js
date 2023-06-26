// 递归超时
// var maxScore = function(nums1, nums2, k) {
//     let max = 0
//     const digui = function(indexs,start){
//         if(indexs.length===k){
//             console.log('等于k');
//             let sum = 0
//             let min = Infinity
//             indexs.forEach(index=>{
//                 sum+=nums1[index]
//                 min = Math.min(min,nums2[index])
//             })
//             max = Math.max(max,sum*min)

//         }else if(indexs.length<k){
//             for(let i= start;i<nums1.length;i++){
//                 indexs.push(i)
//                 digui(indexs,i+1)
//                 indexs.pop(i)
//             }
//         }
//     }
//     digui([],0)
//     return max
// };


// 巧妙的方式先排序 nums2,在根据这个排序的结果过由大到小来操作.
// 注意不要用对象来模拟堆数据类型，因为复杂度比堆还高，因为对象的key涉及额外的哈希计算

var maxScore = function(nums1, nums2, k) {
    let n = nums1.length
    let indexs = [...new Array(n).keys()]
    indexs.sort((a,b)=>nums2[b]-nums2[a])
    // console.log(indexs);
    let sum = 0
    const heap = new MinHeap();
    for(let i=0;i<k;i++){
        let index = indexs[i]
        sum+=nums1[index]
        // 维护小顶堆
        heap.insert(nums1[index])
    }
    let res = sum * nums2[indexs[k-1]] 
    for(let i=k;i<n;i++){
        let index = indexs[i]
        let min = nums2[index]
        let x = nums1[index]
        heap.insert(x);
        sum += x
        sum -= heap.extract()
        res = Math.max(res,sum*min)
    }
    return res
};




const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]]; //交换a，b
class MinHeap {
    constructor(compareFn = (a,b)=> a > b ? 1 : -1) {
        this.compareFn = compareFn
        this.heap = []; // {2}
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if (index === 0) {
        return undefined;
    }
        return Math.floor((index - 1) / 2);
    }
    //这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回
    insert(value) {
        if (value != null) {
            this.heap.push(value); // {1}
            this.siftUp(this.heap.length - 1); // {2}
            return true;
        }
        return false;
    }
    //上移操作  方法接收插入值的位置作为参数
    siftUp(index) {
        let parent = this.getParentIndex(index); // 获取父节点的位置
        // 在最小堆中如果插入的值小于它的父节点 ，或在最大堆中比父节点大  ？？总感觉这个比较有问题 要加入=号
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) >= 1) {
            swap(this.heap, parent, index); //这个元素和父节点交换
            index = parent;
            parent = this.getParentIndex(index); // {4}
        }
    }
     //下移操作  方法接收插入值的位置作为参数
    siftDown(index) {
        let element = index;
        const left = this.getLeftIndex(index); // {1}
        const right = this.getRightIndex(index); // {2}
        const size = this.size();
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) >= 1) { // 这里比较大小写得很繁琐，可以优化
            element = left; // {4}
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) >=  1) { // {5}
            element = right; // {6}  这里赋值是细节 下次if比对的就是这 这个和右边元素的大小
        }
        if (index !== element) { // {7}
            swap(this.heap, index, element); // {8}
            this.siftDown(element); // {9}递归调用重复这个过程
        }
    }

    // extract()：这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
    extract() {
        if (this.isEmpty()) {
            return undefined; // {1}
        }
        if (this.size() === 1) {
            return this.heap.shift(); // {2}
        }
        // console.log('##',this.heap)
        const removedValue = this.findTopimum(); // {3}
        this.heap[0] = this.heap.pop()
        this.siftDown(0); // {4}
        return removedValue; // {5}
    }

    // findTopimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
    findTopimum() {
        return this.isEmpty() ? undefined : this.heap[0]; 
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}


console.log(maxScore([1,3,3,2],[2,1,3,4],3));

let arr1 = [34,2164,1280,2277,2312,1509,867,2223,1482,2379,1032,359,1746,966,232,67,1203,2474,944,1740,1775,1799,1156,1982,1416,511,1167,1334,2344]
let arr2 = [2204,588,474,693,30,2051,1126,1293,1378,1693,1995,2188,1284,1414,1618,2005,1005,1890,30,895,155,526,682,2454,278,999,1417,1682,995]
console.log(maxScore(arr1,arr2,22));