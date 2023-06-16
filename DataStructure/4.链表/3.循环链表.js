import { defaultEquals } from './util';
import { Node } from './linked-list-models'; //Node节点
import LinkedList from './1.SinglyLinkedList';

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {  //头为空的情况  创建节点
                this.head = node; // {1}
                node.next = this.head; // {2} 新增的 指向当前的head
                } else {       //头不为空的情况  给最前面插入节点
                node.next = current; // {3}
                current = this.getElementAt(this.size()); // {4}拿到最后一个节点
                // 更新最后一个元素
                this.head = node; // {5}
                current.next = this.head; // {6} 新增的
                }
            } else { // 这种场景没有变化
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
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
                if (this.size() === 1) {
                this.head = undefined;
                } else {
                const removed = this.head; // {1}
                current = this.getElementAt(this.size()); //拿到最后一个
                this.head = this.head.next; // {3}更新head
                current.next = this.head; // {4}更新最后一个的 next指向位置
                current = removed; // {5}因为要返回删除节点的值
                }
            } else {
                // 不需要修改循环链表最后一个元素
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element; // {6}返回删除节点的值
        }
        return undefined;
    }
}