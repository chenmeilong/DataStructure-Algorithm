

// 计数排序是分布式排序。分布式排序使用已组织好的辅助数据结构（称为桶），然后进行合并，
// 得到排好序的数组。计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组。
// 在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序后的结果数组。
import { Compare, defaultCompare, createNonSortedArray, swap} from './util'

function countingSort(array) {
    if (array.length < 2) { // {1}
        return array;
        }
        const maxValue = findMaxValue(array); // {2}
    
        const counts = new Array(maxValue + 1); // {3}
        array.forEach(element => {
        if (!counts[element]) { // {4}
            counts[element] = 0;
        }
        counts[element]++; // {5}
        });
    
        let sortedIndex = 0;
        counts.forEach((count, i) => {
        while (count > 0) { // {6}
            array[sortedIndex++] = i; // {7}
            count--; // {8}
        }
        });
    return array;
}

function findMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = countingSort(array);
console.log(array.join());