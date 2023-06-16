import { defaultToString } from './util';
class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        }
        toString() {
    return `[#${this.key}: ${this.value}]`;
    }
}

class HashTable {
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
        if (key != null && value != null) { // {1}
            const position = this.hashCode(key); // {2}
            this.table[position] = new ValuePair(key, value); // {3}
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    remove(key) {
        const hash = this.hashCode(key); // {1}
        const valuePair = this.table[hash]; // {2}
        if (valuePair != null) {
            delete this.table[hash]; // {3}
            return true;
        }
        return false;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},{${keys[i]} =>
            ${this.table[keys[i]].toString()}}`;
        }
        return objString;
    }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.hashCode('Gandalf') + ' - Gandalf');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));  //undefined

//这种很容易参数哈希冲突
//解决哈希冲突，分离连接、线性探查、双散列法