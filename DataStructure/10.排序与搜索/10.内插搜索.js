import { Compare, defaultCompare, createNonSortedArray, defaultEquals} from './util'

function interpolationSearch(array, value,
    compareFn = defaultCompare, equalsFn = defaultEquals, diffFn = defaultDiff) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;
    while (low <= high && biggerOrEquals(value, array[low], compareFn) &&
        lesserOrEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]); // {1}
        position = low + Math.floor((high - low) * delta); // {2}
        if (equalsFn(array[position], value)) { // {3}
            return position;
        }
        if (compareFn(array[position], value) === Compare.LESS_THAN) { // {4}
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    return DOES_NOT_EXIST;
}


function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

function biggerOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

console.log('####')
let array = createNonSortedArray(5);
console.log(array.join());
array = interpolationSearch(array,3);
console.log(array);
