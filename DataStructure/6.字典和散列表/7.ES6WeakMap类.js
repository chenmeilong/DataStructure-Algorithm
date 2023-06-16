//WeakSet 或 WeakMap 类没有 entries、keys 和 values 等方法；
//只能用对象作为键。
//创建和使用这两个类主要是为了性能。WeakSet 和 WeakMap 是弱化的（用对象作为键），
//没有强引用的键。这使得 JavaScript 的垃圾回收器可以从中清除整个入口。

const map = new WeakMap();

const ob1 = { name: 'Gandalf' }; // {1}
const ob2 = { name: 'John' };
const ob3 = { name: 'Tyrion' };

map.set(ob1, 'gandalf@email.com'); // {2}
map.set(ob2, 'johnsnow@email.com');
map.set(ob3, 'tyrion@email.com');

console.log(map.has(ob1)); // true
console.log(map.get(ob3)); // tyrion@email.com
map.delete(ob2); //
