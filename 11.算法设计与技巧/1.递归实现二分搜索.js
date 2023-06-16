
//采用分而治之的思想
import { Compare, defaultCompare, createNonSortedArray, swap} from './util'
import quickSort from '../10.排序与搜索/5.快速排序';


//递归二分搜索
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) { // {1}
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {2}
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        } else {
            return mid; //返回搜索到的ID
        }
    }
    return DOES_NOT_EXIST; // {4}
}
export function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);  //先快排 从小到大
    const low = 0;
    const high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}
console.log('####')
let array = createNonSortedArray(5);
console.log(array.join());
array = binarySearch(array,3);
console.log(array);
