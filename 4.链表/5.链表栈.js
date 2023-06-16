import { defaultEquals } from './util';
import { Node } from './linked-list-models'; //Node节点
import DoublyLinkedList from './2.DoublyLinkedList';


class StackLinkedList {
    constructor() {
      this.items = new DoublyLinkedList(); // {1}
    }
    push(element) {
      this.items.push(element); // {2}
    }
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
        return this.items.removeAt(this.size() - 1); //取出栈顶 移除最后一个
    }
    peek() {
      if (this.isEmpty()) {
          return undefined;
      }
      return this.items.getElementAt(this.size() - 1).element;  //栈顶
    }
    isEmpty() {
      return this.items.isEmpty();
    }
    size() {
      return this.items.size();
    }
    clear() {
      this.items.clear();
    }
    toString() {
      return this.items.toString();
    }
}

const r1 = new StackLinkedList()
r1.push('xiaoming')
r1.push('jack')
console.log(r1.toString());
console.log(r1.size())
