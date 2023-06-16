export default class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) { // {1}
            return undefined;
        }
        this.count--; // {2}
        const result = this.items[this.count]; // {3}
        delete this.items[this.count]; // {4}
        return result; // {5}
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
            }
            return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;
        // 遵循 LIFO 原则，使用下面的逻辑来移除栈中所有的元素。
        // while (!this.isEmpty()) {
        //     this.pop();
        // }
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
          objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.toString());

