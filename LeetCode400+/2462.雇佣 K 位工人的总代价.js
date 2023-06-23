
// 159案例有点恶心人
var totalCost = function(costs, k, candidates) {
  let allcost = 0

  const heap = new MinHeap((a,b)=> {
    if(a[0] > b[0]){
      return 1
    }else if(a[0] === b[0]){
      if(a[1] > b[1]) return 1
      else return -1
    }else{
      return -1
    }
  }); //new MaxHeap()
  let left
  let right
  // 先将左右两边的数都填入到堆中
  if(2*candidates<costs.length){
    for(let i=0; i<candidates; i++){
      heap.insert([costs[i],0])
    }
    for(let i=costs.length-candidates; i<costs.length; i++){
      heap.insert([costs[i],1])
    }
    left = candidates
    right = costs.length-1-candidates
  }else{
    // 全部加入
    for(let i=0; i<costs.length;i++){
      heap.insert([costs[i],2])
    }
    left = 1
    right =0
  }
  for(let i=0;i<k;i++){
    if(right >= left){
      // 取出最小的再添加一个进去
      let pop = heap.extract()
      allcost+=pop[0]
      if(pop[1]===0){
        heap.insert([costs[left],0])
        left++
      }else if(pop[1]===1){
        heap.insert([costs[right],1])
        right--
      }else{
        console.log('error');
      }
    }else{
      // 直接找到最小的
      let pop = heap.extract()
      allcost+=pop[0]
    }
  }
  return allcost
};





const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]]; //交换a，b
class MinHeap {
    constructor(compareFn = (a,b)=> a > b ? 1 : -1) {
        this.compareFn = compareFn
        this.heap = []; // {2}
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
            swap(this.heap, parent, index); //这个元素和父节点交换
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
            swap(this.heap, index, element); // {8}
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



// console.log(totalCost([17,12,10,2,7,2,11,20,8],3,4));  // 11
// console.log(totalCost([31,25,72,79,74,65,84,91,18,59,27,9,81,33,17,58],11,2));  // 11
console.log(totalCost([2,2,2,2,2,2,1,4,5,5,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,2],7,3));