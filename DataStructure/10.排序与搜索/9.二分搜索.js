import { Compare, defaultCompare, createNonSortedArray, swap} from './util'
import quickSort from './5.快速排序';

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array); // {1}
    let low = 0; // {2}
    let high = sortedArray.length - 1; // {3}
    while (lesserOrEquals(low, high, compareFn)) { // {4}
        const mid = Math.floor((low + high) / 2); // {5}
        const element = sortedArray[mid]; // {6}
        if (compareFn(element, value) === Compare.LESS_THAN) { // {7}
            low = mid + 1; // {8}
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {9}
            high = mid - 1; // {10}
        } else {
            return mid; // {11}
        }
    }
    return DOES_NOT_EXIST; // {12}
}
function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
console.log('####')
let array = createNonSortedArray(5);
console.log(array.join());
array = binarySearch(array,3);
console.log(array);