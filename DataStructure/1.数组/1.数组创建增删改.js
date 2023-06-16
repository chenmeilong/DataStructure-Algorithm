//创建数组
let daysOfWeek0 = new Array(); // {1}
let daysOfWeek1 = new Array(7); // 创建长度为7 数组
let daysOfWeek2 = new Array('Sunday', 'Monday'); // {3}
let daysOfWeek3 = [];

//push unshift pop shift 方法都可以支持一个或者多个数据
let  numbers = [1,2,3]
numbers.push(11);
numbers.push(12, 13);

//splice 在任意位置添加或删除元素
numbers.splice(1,3);  //删除了从数组索引 1 开始的 3 个元素
numbers.splice(5, 0, 2, 3, 4); // 第五个位置开始， 删除0个元素  把数 2、3、4 插入数组里
