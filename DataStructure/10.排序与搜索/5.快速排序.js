
//快速排序也许是最常用的排序算法了。它的复杂度为 O(n\log(n))
// 且性能通常比其他复杂度为 O(n\log(n))的排序算法要好。和归并排序一样，
// 快速排序也使用分而治之的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。

import { Compare, defaultCompare, createNonSortedArray, swap} from './util'

// 传递待排序数组，以及索引 0 及其最末的位置作为参数。
function quick(array, left, right, compareFn) {
    let index; // {1}
    if (array.length > 1) { // {2}
        index = partition(array, left, right, compareFn); // {3}
        if (left < index - 1) { // {4}
            quick(array, left, index - 1, compareFn); // {5}
        }
        if (index < right) { // {6}
            quick(array, index, right, compareFn); // {7}
        }
    }
    return array;
};


//划分    以主元为中心 左右排序
function partition(array, left, right, compareFn) {
    //主元选着很重要，一般选着数组一个随机值或者一个中间值
    const pivot = array[Math.floor((right + left) / 2)]; //选择中间值作为主元
    let i = left; //最左边
    let j = right; // 最右边
    while (i <= j) { //
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) { // {12}
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) { // {13}
            j--;
        }
        if (i <= j) { // {14}
            swap(array, i, j); // {15}
            i++;
            j--;
        }
    }
    return i; // {16}
}

export default function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
};

let array = createNonSortedArray(5);
console.log(array.join());
array = quickSort(array);
console.log(array.join());

