//下划线约定 属性名称之前加上一个下划线（_）  这种方式只是一种约定，并不能保护数据
// class Stack {
//     constructor() {
//         this._count = 0;
//         this._items = {};
//     }
// }
const _items = Symbol('stackItems'); // {1}
class Stack {
    constructor() {
        this.count = 0;
        this[_items] = []; // {2} 函数中初始化它的值
    }
    push(element) {
        this[_items][this.count] = element;
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
        const result = this[_items][this.count]; // {3}
        delete this[_items][this.count]; // {4}
        return result; // {5}
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
            }
            return this[_items][this.count - 1];
    }
    clear() {
        this[_items] = {};
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
        let objString = `${this[_items][0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
          objString = `${objString},${this[_items][i]}`; // {3}
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
stack.push(5);
stack.push(8);

console.log(Object.getOwnPropertyNames(stack)); // {1}count 
console.log(Object.keys(stack)); // {2}count属性是公开的
console.log(stack.items); // {3}


