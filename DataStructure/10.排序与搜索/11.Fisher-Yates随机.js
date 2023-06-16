

// 它的含义是迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换。这个随机位置比当前位置小。
// 这样，这个算法可以保证随机过的位置不会再被随机一次（洗扑克牌的次数越多，随机效果越差）。

import {createNonSortedArray, swap} from './util'
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    } 
    return array;
}



let array = createNonSortedArray(5);
console.log(array.join());
array = shuffle(array);
console.log(array.join());