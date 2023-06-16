import { MinHeap } from './1.小顶堆';
import { defaultCompare,Compare } from './util';

//比大小调换位置
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}

export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn); // {1}
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); // 5
