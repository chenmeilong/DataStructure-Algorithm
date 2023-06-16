class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element) {          //从前面进队  分三种情况
        if (this.isEmpty()) { // {1}
            this.addBack(element);
        } else if (this.lowestCount > 0) { // {2}为最前面的id大于0的情况
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
          for (let i = this.count; i > 0; i--) { // {3}id小于等于0的情况 要移位添加
            this.items[i] = this.items[i - 1];
        }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element; // {4}
        }
    }
    addBack(element) {       //从后面进队
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {        //从前面移除
        if (this.isEmpty()) {
            return undefined; 
        }
        const result = this.items[this.lowestCount]; // {1}
        delete this.items[this.lowestCount]; // {2}
        this.lowestCount++; // {3}
        return result; // {4}
    }
    removeBack() {
        if (this.isEmpty()) { // {1}
            return undefined;
        }
        this.count--; // {2}
        const result = this.items[this.count]; // {3}
        delete this.items[this.count]; // {4}
        return result; // {5}
    }
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    isEmpty() {
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

const deque = new Deque();
console.log(deque.isEmpty()); // 输出true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // 输出3
console.log(deque.isEmpty()); // 输出false
deque.removeFront(); // 移除John
console.log(deque.toString()); // Jack, Camila
deque.removeBack(); // Camila决定离开
console.log(deque.toString()); // Jack
deque.addFront('John'); // John回来询问一些信息
console.log(deque.toString()); // John, Jack

exports.Deque=Deque