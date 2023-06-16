

class Set {
    constructor() {
        this.items = {};
    }
    has(element){
        // return element in this.items;
        // return this.items.hasOwnProperty(element) //这种写法也可以
        // 如果这样的话，代码检查工具如ESLint会抛出一个错误。错误的原因为不是所有的对象都继承了 Object.prototype，
        // 甚至继承了 Object.prototype 的对象上的 hasOwnProperty 方法也有可能被覆盖，导致代码不能正常工作
        return Object.prototype.hasOwnProperty.call(this.items, element); //这种写法更好，更安全
    };
    add(element) {
        if (!this.has(element)) {
          this.items[element] = element; // {1}
            return true;
        }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
          delete this.items[element]; // {1}
            return true;
        }
        return false;
    }
    clear() {
        this.items = {}; // {2}
    }
    size() {
        return Object.keys(this.items).length; // {1}
    };
    sizeLegacy() {
        let count = 0;
        for(let key in this.items) { // {2}
          if(this.items.hasOwnProperty(key)) { //属性既有继承自 JavaScript 的 Object 类的 所以需要筛选 检测属性是否在当前对象上
              count++;  // {4}
        }
        return count;
        };
    }
    values() {
        return Object.values(this.items);
    }
    valuesLegacy() {
        let values = [];
        for(let key in this.items) { // {1}
            if(this.items.hasOwnProperty(key)) {
                values.push(key); // {2}
            }
        }
        return values;
    };
    //并集
    union(otherSet) {
        const unionSet = new Set(); // {1}
        this.values().forEach(value => unionSet.add(value)); // {2}
        otherSet.values().forEach(value => unionSet.add(value)); // {3}
        return unionSet;
    }
    //改进交集 使迭代次数最少
    intersection(otherSet) {
        const intersectionSet = new Set(); // {1}
        const values = this.values(); // {2}
        const otherValues = otherSet.values(); // {3}
        let biggerSet = values; // {4}
        let smallerSet = otherValues; // {5}
        if (otherValues.length - values.length > 0) { // {6}
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => { // {7}
            if (biggerSet.includes(value)) {
            intersectionSet.add(value);
            }
        });
    return intersectionSet;
    }
    //差集
    difference(otherSet) {
        const differenceSet = new Set(); // {1}
        this.values().forEach(value => { // {2}
          if (!otherSet.has(value)) { // {3}
            differenceSet.add(value); // {4}
            }
        });
    return differenceSet;
    }
    //子集  应该是可以改进every的办法 节省很多代码  需要测试
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) { // {1}
        return false;
        }
        const isSubset = this.values().every(value => { // {3}
            return otherSet.has(value)
        });
    return isSubset; // {7}
    }

}


const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
