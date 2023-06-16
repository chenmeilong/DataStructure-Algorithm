// 单向链表
import { defaultEquals } from './util';
import { Node } from './linked-list-models'; //Node节点

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // {2}存储链表中的元素数量。
        this.head = undefined; //保存的引用  head节点的引用
        this.equalsFn = equalsFn; // 比较两个 JavaScript 对象或值是否相等的自定义函数
    }
    //向链表尾部添加元素
    push(element) {
        const node = new Node(element); //创建节点
        let current; // {2}
        if (this.head == null) { // {3}
            this.head = node;
        } else {
            current = this.head; // {4}
            while (current.next != null) { // {5} 获得最后一项   undefined==null
                current = current.next;
            }
          // 将其next赋为新元素，建立链接
          current.next = node; // {6}
        }
        this.count++; // {7}
    }
    //从链表中移除元素 按照index
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) { // {1}
            let current = this.head; // {2}
            // 移除第一项
            if (index === 0) { // {3}
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;//当前节点就会被丢弃在计算机内存中，等着被垃圾回收器清除。
                // 将previous与current的下一项链接起来：跳过current，从而移除它
            }
            this.count--; // {9}
            return current.element;  //返回 移除后 当前的值
        }
        return undefined; // {10}
    }
    //循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // {1}
            let node = this.head; // {2}
            for (let i = 0; i < index && node != null; i++) { // {3}
                node = node.next;
            }
          return node; // {4}
        }
        return undefined; // {5}
    }
    //在任意位置插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) { // {1}
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                const current = this.head;
                node.next = current; // {2}
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // {3}
                const current = previous.next; // {4}
                node.next = current; // {5}
                previous.next = node; // {6}
            }
            this.count++; // 更新链表的长度
            return true;
        }
        return false; // {7}
    }
    
    //返回元素的位置
    indexOf(element) {
        let current = this.head; // {1}
        for (let i = 0; i < this.count && current != null; i++) { // {2}
            if (this.equalsFn(element, current.element)) { // {3}
                return i; // {4}
            }
          current = current.next; // {5}
        }
        return -1; // {6}
    }
    //从链表中移除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head == null) { // {1}
            return '';
        }
        let objString = `${this.head.element}`; // {2}
        let current = this.head.next; // {3}
        for (let i = 1; i < this.size() && current != null; i++) { // {4}
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString; // {5}
    }

}


var reversePrint = function(head) {
    if (head!=null){
        return reversePrint(head.next).concat(Array(head.val))
    }else{
        return []
    }
};

