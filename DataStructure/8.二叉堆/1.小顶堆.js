
import { defaultCompare,Compare } from './util';

//交换a，b
const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
export class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // {1}
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
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) >= Compare.BIGGER_THAN) {
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
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) >= Compare.BIGGER_THAN) { // 这里比较大小写得很繁琐，可以优化
            element = left; // {4}
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) >=  Compare.BIGGER_THAN) { // {5}
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

        const removedValue = this.findMinimum(); // {3}
        this.heap[0] = this.heap.pop()


        this.siftDown(0); // {4}
        return removedValue; // {5}
    }


    // findMinimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]; 
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }

}


const heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1
console.log('Extract minimum: ', heap.extract()); // 1



// const heap2 = new MinHeap();
// for (let i = 1; i < 10; i++) {
//     heap.insert(i);
// }
// console.log('Extract minimum: ', heap.extract()); // 1
