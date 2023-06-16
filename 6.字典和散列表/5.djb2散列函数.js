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
    //创建散列函数    这是最受社区推崇的散列函数之一。
    djb2HashCode(key) {
        const tableKey = this.toStrFn(key); // {1}将键转化为字符串
        let hash = 5381; // 质数 大多数实现都使用 5381
        for (let i = 0; i < tableKey.length; i++) { // {3}
            hash = (hash * 33) + tableKey.charCodeAt(i); //hash 与 33 相乘，并和当前迭代到的字符的 ASCII 码值相加。
        }
        return hash % 1013; //散列表的大小为 1000。取一个大概的质数
    }
    
    hashCode(key) {
        return this.djb2HashCode(key);
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