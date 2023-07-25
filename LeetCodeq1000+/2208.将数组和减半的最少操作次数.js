var halveArray = function(nums) {
    let sum = 0
    let maxMap  = new MinHeap((a,b)=>a>b?-1:1)
    for(let num of nums){
        sum+=num
        maxMap.insert(num)
    }
    sum/=2
    let extract = 0
    let count = 0
    while(sum>extract){
        let half = maxMap.extract()/2
        maxMap.insert(half)
        extract+=half
        count++
    }
    return count
};


class MinHeap {
    constructor(compareFn = (a,b)=> a > b ? 1 : -1) {
        this.compareFn = compareFn
        this.heap = []; // {2}
    }
    swap(array, a, b){
        [array[a], array[b]] = [array[b], array[a]] //交换a，b
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if (index === 0) {
        return undefined;
    }
        return Math.floor((index - 1) / 2);
    }
    //这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回
    insert(value) {
        if (value != null) {
            this.heap.push(value); // {1}
            this.siftUp(this.heap.length - 1); // {2}
            return true;
        }
        return false;
    }
    //上移操作  方法接收插入值的位置作为参数
    siftUp(index) {
        let parent = this.getParentIndex(index); // 获取父节点的位置
        // 在最小堆中如果插入的值小于它的父节点 ，或在最大堆中比父节点大  ？？总感觉这个比较有问题 要加入=号
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) >= 1) {
            this.swap(this.heap, parent, index); //这个元素和父节点交换
            index = parent;
            parent = this.getParentIndex(index); // {4}
        }
    }
     //下移操作  方法接收插入值的位置作为参数
    siftDown(index) {
        let element = index;
        const left = this.getLeftIndex(index); // {1}
        const right = this.getRightIndex(index); // {2}
        const size = this.size();
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) >= 1) { // 这里比较大小写得很繁琐，可以优化
            element = left; // {4}
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) >=  1) { // {5}
            element = right; // {6}  这里赋值是细节 下次if比对的就是这 这个和右边元素的大小
        }
        if (index !== element) { // {7}
            this.swap(this.heap, index, element); // {8}
            this.siftDown(element); // {9}递归调用重复这个过程
        }
    }

    // extract()：这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
    extract() {
        if (this.isEmpty()) {
            return undefined; // {1}
        }
        if (this.size() === 1) {
            return this.heap.shift(); // {2}
        }
        // console.log('##',this.heap)
        const removedValue = this.findTopimum(); // {3}
        this.heap[0] = this.heap.pop()
        this.siftDown(0); // {4}
        return removedValue; // {5}
    }

    // findTopimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。
    findTopimum() {
        return this.isEmpty() ? undefined : this.heap[0]; 
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}