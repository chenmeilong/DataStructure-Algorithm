

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

export function defaultCompare(a, b) {
    if (a === b) { // {1}
    return 0;
    }
    //如果第一个元素小于第二个元素，它就返回 -1，反之则返回 1
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
    return a === b;
}

export function createNonSortedArray(size) { // 6
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i);
    }
    return array;
}


export function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // 经典方式
    [array[a], array[b]] = [array[b], array[a]]; // ES2015的方式
}