
function bubbleSort(array) {
    for(let i =0 ; i< array.length-1 ; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] > array[j]){
                [array[i],array[j]] = [array[j],array[i]]
            }
        }
    }
    return array
};

let array = [5,4,3,2,1]
array = bubbleSort(array);
console.log(array.join());
