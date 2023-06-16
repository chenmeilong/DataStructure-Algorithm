
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

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn; // 用于将key 转换成字符串  注意{obj:obj} 这是不友好，所以需要调用obj.string
        this.table = {}; // {2}
    }
    // set(key,value)：向字典中添加新元素。如果key已经存在，那么已存在的 value 会被新的值覆盖。
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key); // {1}
            this.table[tableKey] = new ValuePair(key, value); // 存的是对象 有key有value 还有toString()
            return true;
        }
        return false;
    }

    // remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // hasKey(key)：如果某个键值存在于该字典中，返回 true，否则返回 false。
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    // get(key)：通过以键值作为参数查找特定的数值并返回。
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]; // {1}
        return valuePair == null ? undefined : valuePair.value; // {2}
    }

    // keys()：将字典所包含的所有键名以数组形式返回。
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }
    // values()：将字典所包含的所有数值以数组形式返回。
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    // keyValues()：将字典中所有[键，值]对返回。
    keyValues() {
        return Object.values(this.table);
    }

    // forEach(callbackFn)：迭代字典中所有的键值对。callbackFn 有两个参数：key 和 value。
    // 该方法可以在回调函数返回 false 时被中止（和 Array 类中的 every 方法相似）
    forEach(callbackFn) {
        const valuePairs = this.keyValues(); // {1}
        for (let i = 0; i < valuePairs.length; i++) { // {2}
          const result = callbackFn(valuePairs[i].key, valuePairs[i].value); // {3}
            if (result === false) {
                break; // {4}
            }
        }
    }
    
    // clear()：删除该字典中的所有值。
    clear() {
        this.table = {};
    }

    // size()：返回字典所包含值的数量。与数组的 length 属性类似。
    size() {
        return Object.keys(this.table).length;
    }
    // isEmpty()：在 size 等于零的时候返回 true，否则返回 false。
    isEmpty() {
        return this.size() === 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`; // {1}
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`; // {2}
        }
        return objString; // {3}
    }
}

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('Gandalf'));  //true
console.log(dictionary.size());    //3
console.log(dictionary.keys());   //[ 'Gandalf', 'John', 'Tyrion' ]
console.log(dictionary.values());  //[ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com']
console.log(dictionary.get('Tyrion')); //tyrion@email.com

dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`);
});
