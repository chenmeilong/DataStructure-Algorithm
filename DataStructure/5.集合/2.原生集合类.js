
const set = new Set();
set.add(1);
console.log(set.values()); // 输出@Iterator
console.log(set.has(1)); // 输出true
console.log(set.size); // 输出1 有size属性
set.delete(1);  //删除集合1

//原生set集合 没有交集并集差集子集，所以我们需要自己模拟

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

// 使用扩展运算符
//并集
console.log(new Set([...setA, ...setB])); //...对集合解构 []将集合转化为数组
//交集
console.log(new Set([...setA].filter(x => setB.has(x))));
//差集
console.log(new Set([...setA].filter(x => !setB.has(x))));


//模拟并集运算
const union = (setA, setB) => {
    const unionAb = new Set();
    setA.forEach(value => unionAb.add(value));
    setB.forEach(value => unionAb.add(value));
    return unionAb;
};
console.log(union(setA, setB)); // 输出[1, 2, 3, 4]

//模拟交集运算
const intersection = (setA, setB) => {
    const intersectionSet = new Set();
    setA.forEach(value => {
        if (setB.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};
console.log(intersection(setA, setB)); // 输出[2, 3]

//模拟差集运算
const difference = (setA, setB) => {
    const differenceSet = new Set();
    setA.forEach(value => {
        if (!setB.has(value)) { // {1}
            differenceSet.add(value);
        }
    });
    return differenceSet;
};
console.log(difference(setA, setB));



