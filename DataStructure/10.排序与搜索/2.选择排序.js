// 选择排序算法是一种原址比较排序算法。
// 思路：找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。

function selectionSort(array) {
    for(let i=0; i<array.length; i++){
        let minIndex = i  //假设本迭代轮次的第i个值为数组最小值
        for(let j = i ; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j //array[indexMin]>array[j] 所以j肯定是比较小的那个的index
            }
        }
        [array[i],array[minIndex]] =[array[minIndex],array[i]]
    }
    return array
};

let array = [5,4,3,2,1]
array = selectionSort(array);
console.log(array.join());
