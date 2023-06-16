class Stack {
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
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
        rem = Math.floor(number % 2); // {2}
        remStack.push(rem); // {3}
        number = Math.floor(number / 2); // {4}
    }

    while (!remStack.isEmpty()) { // {5}
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000

