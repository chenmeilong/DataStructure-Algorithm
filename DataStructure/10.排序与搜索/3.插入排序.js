
// 插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。
// 接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，
// 头两项就已正确排序，接着和第三项比较（它是该插入到第一、第二还是第三的位置呢），以此类推。


function insertionSort(array) {
    for(let i=1; i<array.length; i++){
        let temp = array[i]
        let j = i
        while(j > 0 && array[j-1]>temp){
            array[j] = array[j-1]
            j--
        }
        array[j] = temp  //j为找到的位置 放置新加入排序的temp

    }
    return array;
};

let array = [5,4,3,2,1]
array = insertionSort(array);
console.log(array.join());
