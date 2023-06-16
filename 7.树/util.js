

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