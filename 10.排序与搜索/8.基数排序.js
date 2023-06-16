//基数排序也是一个分布式排序算法，它根据数字的有效位或基数（这也是它为什么叫基数排序）
//将整数分布到桶中。基数是基于数组中值的记数制的。
import { Compare, defaultCompare, createNonSortedArray, swap} from './util'

function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array;
    }
    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);
    let significantDigit = 1; // {1}
    while ((maxValue - minValue) / significantDigit >= 1) { // {2}
        array = countingSortForRadix(array, radixBase, significantDigit, minValue); // {3}
        significantDigit *= radixBase; // {4}
    }
    return array;
}


function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase; i++) { // {5}
        buckets[i] = 0;
    }
    for (let i = 0; i < array.length; i++) { // {6}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {7}
        buckets[bucketsIndex]++; // {8}
    }
    for (let i = 1; i < radixBase; i++) { // {9}
        buckets[i] += buckets[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) { // {10}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {11}
        aux[--buckets[bucketsIndex]] = array[i]; // {12}
    }
    for (let i = 0; i < array.length; i++) { // {13}
        array[i] = aux[i];
    }
    return array;
}




let array = createNonSortedArray(5);
console.log(array.join());
array = radixSort(array);
console.log(array.join());