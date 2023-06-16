
// 桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组），
// 再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），
// 来对每个桶进行排序。然后，它将所有的桶合并为结果数组。
import { Compare, defaultCompare, createNonSortedArray, swap} from './util'

function bucketSort(array, bucketSize = 5) { // {1}
    if (array.length < 2) {
        return array;
    }
    const buckets = createBuckets(array, bucketSize); // {2}
    return sortBuckets(buckets); // {3}
}


function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) { // {4}
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // {5}
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) { // {6}
        buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) { // {7}
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize); // {8}
        buckets[bucketIndex].push(array[i]);
    }
    return buckets;
}


function sortBuckets(buckets) {
    const sortedArray = []; // {9}
    for (let i = 0; i < buckets.length; i++) { // {10}
        if (buckets[i] != null) {
            insertionSort(buckets[i]); // {11}
            sortedArray.push(...buckets[i]); // {12}
        }
    }
    return sortedArray;
}


let array = createNonSortedArray(5);
console.log(array.join());
array = bucketSort(array);
console.log(array.join());