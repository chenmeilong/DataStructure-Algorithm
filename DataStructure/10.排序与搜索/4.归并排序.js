// 归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，
// 直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
// 由于是分治法，归并排序也是递归的。我们要将算法分为两个函数：第一个负责将一个大数组分为多个小数组并调用用来排序的辅助函数。
import { Compare, defaultCompare, createNonSortedArray, swap} from './util'


function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) { // {1}
        const length = array.length;
        const middle = Math.floor(length / 2); // 首先得找到数组的中间位
        // 将会对自身调用 mergeSort 函数直到 left 数组和 right 数组的大小小于等于 1
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn); // {4}
        array = merge(left, right, compareFn); // {5}
    }
    return array;
}
//函数接收两个数组作为参数，并将它们归并至一个大数组。
function merge(left, right, compareFn) {
    let i = 0; // {6}
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) { // {7}
        //从小到大将两个数组排序进去 result 
        result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]); // {8}
    }
    //拼接剩下的元素
    return result.concat(i < left.length ? left.slice(i) : right.slice(j)); // {9}
}


let array = createNonSortedArray(5);
console.log(array.join());
array = mergeSort(array);
console.log(array.join());
