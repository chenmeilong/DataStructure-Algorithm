// 堆排序算法不是一个稳定的排序算法，也就是说如果数组没有排好序，可能会得到不一样的结果
// (1) 用数组创建一个最大堆用作源数据。
// (2) 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减 1。
// (3) 最后，我们将堆的根节点下移并重复步骤 2 直到堆的大小为 1。
// 我们用最大堆得到一个升序排列的数组（从最小到最大）。如果我们想要这个数组按降序排列，可以用最小堆代替。
import { defaultCompare,Compare } from './util';

//交换a，b
const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];
//比大小调换位置
function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}


//下移操作  接收插入值的位置作为参数
function heapify(array, index, size, compareFn) {
    let element = index;  //element是要交换的元素
    const left = 2 * index + 1; // {1}
    const right = 2 * index + 2; // {2}
    if (left < size && compareFn(array[element], array[left]) >= Compare.BIGGER_THAN) { // {3}
        element = left; // {4}这里赋值是细节 下次if比对的就是这 这个和右边元素的大小
    }
    if (right < size && compareFn(array[element], array[right]) >=  Compare.BIGGER_THAN) { // {5}
        element = right; // {6}

    }
    
    if (index !== element) { // {7}
        swap(array, index, element); // {8}
        heapify(array, element, size, compareFn); // {9}递归调用重复这个过程
    }
}

function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    compareFn = reverseCompare(compareFn);   //切换成最大堆排序
    buildMaxHeap(array, compareFn); // 步骤1创建堆   创建小堆
    while (heapSize > 1) {
        swap(array, 0, --heapSize); // 步骤2 将第一个位置替换为堆的最后一个位置 将堆的大小减 1
        heapify(array, 0, heapSize, compareFn); // 步骤3  将堆的根节点下移
        console.log('Before ？？？: ', array); 
    }
    return array;
}

function buildMaxHeap(array, compareFn) {  //创建最小堆
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }
    console.log('Before sorting: ', array); 
    return array;
}

const array = [7, 6, 3, 5, 4, 1, 2];
console.log('Before sorting: ', array);
console.log('After sorting: ', heapSort(array));
