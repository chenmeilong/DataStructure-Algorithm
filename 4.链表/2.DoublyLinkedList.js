import { defaultEquals } from './util';
import { Node } from './linked-list-models'; //Node节点
import LinkedList from './1.SinglyLinkedList';


//感觉这里有点问题 怎么supper？？？？？
//继承原节点 增加前向指针
class DoublyNode extends Node { // {1}
    constructor(element, next, prev) {
      super(element, next); // {2}
      this.prev = prev; // {3} 新增的
    }
}


//
export default class DoublyLinkedList extends LinkedList { // {4}
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); // {5}
        this.tail = undefined; // {6} 新增的
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // {1} 新增的
                this.head = node;
                this.tail = node;
                } else {
                node.next = this.head; // {2}
                current.prev = node; // {3} 新增的
                this.head = node; // {4}
                }
            } else if (index === this.count) { // 最后一项 // 新增的
                current = this.tail; // {5}
                current.next = node; // {6}
                node.prev = current; // {7}
                this.tail = node; // {8}
            } else {
                const previous = this.getElementAt(index - 1); // {9}
                current = previous.next; // {10}
                node.next = current; // {11}
                previous.next = node; // {12}
                current.prev = node; // {13} 新增的
                node.prev = previous; // {14} 新增的
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next; // {1}
                // 如果只有一项，更新tail // 新增的
                if (this.count === 1) { // {2}
                this.tail = undefined;
                } else {
                this.head.prev = undefined; // {3}
                }
            } else if (index === this.count - 1) { // 最后一项 //新增的
                current = this.tail; // {4}
                this.tail = current.prev; // {5}
                this.tail.next = undefined; // {6}
            } else {
                current = this.getElementAt(index); // {7}
                const previous = current.prev; // {8}
                // 将previous与current的下一项链接起来——跳过current
                previous.next = current.next; // {9}
                current.next.prev = previous; // {10} 新增的
            }
            this.count--;
            return current.element;   //返回移除后当前的值
        }
        return undefined;
    }
}