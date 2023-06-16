//WeakSet 或 WeakMap 类没有 entries、keys 和 values 等方法；
//只能用对象作为键。
//创建和使用这两个类主要是为了性能。WeakSet 和 WeakMap 是弱化的（用对象作为键），
//没有强引用的键。这使得 JavaScript 的垃圾回收器可以从中清除整个入口。

const set = new WeakSet();

const ob1 = { name: 'Gandalf' }; // {1}
const ob2 = { name: 'John' };
const ob3 = { name: 'Tyrion' };

set.add(ob1); 
set.add(ob2); 
set.add(ob3); 


console.log(set.has(ob1)); // 输出true
set.delete(ob1);  //删除集合1
