


import { LinkedList } from '../4.链表/1.SinglyLinkedList'; //Node节点
import { defaultToString } from './util';

class HashTableLineCheck {
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

    //增
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) { // {1}
                this.table[position] = new ValuePair(key, value); // {2}
            } else {
                let index = position + 1; // {3}
                while (this.table[index] != null) { // {4}
                index++; // {5}
                }
                this.table[index] = new ValuePair(key, value); // {6}
            }
            return true;
        }
        return false;
    }
    //查
    get(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) { // {1}
            if (this.table[position].key === key) { // {2}
                return this.table[position].value; // {3}
            }
            let index = position + 1; // {4}
            while (this.table[index] != null && this.table[index].key !== key) { // {5}
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) { // {6}
                return this.table[position].value; // {7}
            }
        }
        return undefined; // {8} 找不带返回undefined
    }
    //删除
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position]; // {1}
                this.verifyRemoveSideEffect(key, position); // {2}
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key ) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index]; // {3}
                this.verifyRemoveSideEffect(key, index); // {4}
                return true;
            }
        }
    return false;
    }
    //计算移除的key和位置  产生的问题和处理  缺位的元素要往前移动
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key); // {1}
        let index = removedPosition + 1; // {2}
        while (this.table[index] != null) { // {3}
            const posHash = this.hashCode(this.table[index].key); // {4}
            if (posHash <= hash || posHash <= removedPosition) { // {5}
                this.table[removedPosition] = this.table[index]; // {6}
                delete this.table[index];
                removedPosition = index;
        }
        index++;
        }
    }
}