
//数组方法 //
//concat  连接 2 个或更多数组，并返回结果
// every	对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true
// filter	对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组
// forEach	对数组中的每个元素运行给定函数。这个方法没有返回值
// join	将所有的数组元素连接成一个字符串
// indexOf	返回第一个与给定参数相等的数组元素的索引，没有找到则返回 -1
// lastIndexOf	返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
// map	对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组
// reverse	颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个
// slice	传入索引值，将数组里对应索引范围内的元素作为新数组返回
// some	对数组中的每个元素运行给定函数，如果任一元素返回 true，则返回 true
// sort	按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
// toString	将数组作为字符串返回 
// valueOf	和 toString 类似，将数组作为字符串返回

// ECMAScript6 和数组的新功能 //
// @@iterator	返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对
// copyWithin	复制数组中一系列元素到同一数组指定的起始位置
// entries	返回包含数组所有键值对的 @@iterator
// includes	如果数组中存在某个元素则返回 true，否则返回 false。ES2016 新增
// find	根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素
// findIndex	根据回调函数给定的条件从数组中查找元素，如果找到则返回该元素在数组中的索引
// fill	用静态值填充数组 
// from	根据已有数组创建一个新数组
// keys	返回包含数组所有索引的 @@iterator
// of	根据传入的参数创建一个新数组  let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
// values	返回包含数组中所有值的 @@iterator

numbers=[3,2,1]
// for (const n of numbers) {
//     console.log(n);
// }

//@@iterator
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 数组中的所有值都迭代完之后返回undefined 
iterator = numbers[Symbol.iterator]();
console.log('###########')
for (const n of iterator) {
    console.log(n);
}

//form 方法
let numbers2 = Array.from(numbers);   //Array.from 方法根据已有的数组创建一个新数组
let evens = Array.from(numbers, x => (x % 2 == 0))   //可以传入一个用来过滤值的函数  [ false, true, false ]
console.log(evens)


//fill方法
let numbersCopy = [1,2,3,4,5,6]
numbersCopy.fill(0); //全部填充为0  
numbersCopy.fill(2, 1); //从1开始全填2  
numbersCopy.fill(1, 3, 5); //把 1 填充到数组索引 3 到 5 的位置（不包括 5）


//copyWithin方法
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3); //4、5、6 三个值复制到数组前三个位置，得到 [4, 5, 6, 4, 5, 6]
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5); //会把从位置 3 开始到位置 5 结束（不包括 5）的元素复制到位置 1，结果是得到数组 [1, 4, 5, 4, 5, 6]。

//自定义排序
const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }, // ES2017允许存在尾逗号
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1; //不交换位置
    }
    if (a.age > b.age) {
        return 1;  //交换位置
    }
    return 0;
}
console.log(friends.sort(comparePerson));