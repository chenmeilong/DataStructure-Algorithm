
// 单向链表
import { LinkedList } from '../4.链表/1.SinglyLinkedList'; //Node节点
import { defaultToString } from './util';

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    //创建散列函数  现在的函数规则是：将，将每个字母ascll加起来%37
    loseloseHashCode(key) {
        if (typeof key === 'number') { // {1}
            return key;
        }
        const tableKey = this.toStrFn(key); // {2}
        let hash = 0; // {3}
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i); // {4}
        }
        return hash % 37; //使用 hash 值和一个任意数做除法的余数（%）——这可以规避操作数超过数值变量最大表示范围的风险。
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
        if (this.table[position] == null) { // {1}
            this.table[position] = new LinkedList(); // {2}
        }
            this.table[position].push(new ValuePair(key, value)); // {3}
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position]; // {1}
        if (linkedList != null && !linkedList.isEmpty()) { // {2}
            let current = linkedList.getHead(); // {3}
            while (current != null) { // {4}
                if (current.element.key === key) { // {5}
                return current.element.value; // {6}
                }
                current = current.next; // {7}
            }
        }
        return undefined; // {8}
    }
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) { // {1}
                    linkedList.remove(current.element); // {2}
                    if (linkedList.isEmpty()) { // {3}
                        delete this.table[position]; // {4}
                    }
                    return true; // {5}
                    }
                current = current.next; // {6}
                }
        }
        return false; // {7}
    }
}