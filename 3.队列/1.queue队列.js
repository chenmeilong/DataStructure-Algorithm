
export default class Queue {
    constructor() {
      this.count = 0; // {1} 队列中元素数量
      this.lowestCount = 0; // {2} 队列最前面的序号
      this.items = {}; // {3} 存放队列的对象
    }
    enqueue(element) {  //插入数据到队列的末尾
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {       //从队列中取出数据
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // {1}取出当前队列最前面的数据
        delete this.items[this.lowestCount]; // {2} 删除最前面的数据
        this.lowestCount++; // {3}  队列最前面的ID+1
        return result; // {4}       返回取出的内容
    }
    peek() {          //检查队列中的最前面的数据
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    isEmpty() {
        // return this.count - this.lowestCount === 0;   //两种写法
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new Queue();
console.log(queue.isEmpty()); // 输出true
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString()); // John,Jack
queue.enqueue('Camila');
console.log(queue.toString()); // John, Jack, Camila
console.log(queue.size()); // 输出3
console.log(queue.isEmpty()); // 输出false
queue.dequeue(); // 移除John
queue.dequeue(); // 移除Jack
console.log(queue.toString()); // Camila

exports.Queue = Queue;