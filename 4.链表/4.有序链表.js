import { defaultEquals } from './util';
import { Node } from './linked-list-models'; //Node节点
import LinkedList from './1.SinglyLinkedList';

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};
function defaultCompare(a, b) {
    if (a === b) { // {1}
    return 0;
    }
    //如果第一个元素小于第二个元素，它就返回 -1，反之则返回 1
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
        constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn; // {3}
    }

    // 有序插入元素
    insert(element, index = 0) { // {1}
        if (this.isEmpty()) {
          return super.insert(element, 0); // {2}
        }
        const pos = this.getIndexNextSortedElement(element); // 计算位置
        return super.insert(element, pos); // 插入
    }
    //计算位置
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element); // {5}
            if (comp === Compare.LESS_THAN) { //比较完小了
                return i;
            }
            current = current.next;
        }
        return i; // {7}
    }
}
