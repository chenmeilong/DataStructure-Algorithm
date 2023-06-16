
//速度较慢o(n)
class Stack {
    constructor() {
      this.items = []; // {1}
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty()); // 输出为true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // 输出8

stack.push(11);
console.log(stack.size()); // 输出3
console.log(stack.isEmpty()); // 输出false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); // 输出2