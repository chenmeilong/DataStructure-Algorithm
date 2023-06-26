// 可以用堆进行优化
// 自己写的模拟
// var leastInterval = function(tasks, n) {
//     let map = new Map()
//     tasks.forEach((task)=>map.set(task,(map.get(task) || 0)+1))
//     // console.log(map);
//     let count = 0
//     while(map.size){
//         map = new Map(Array.from(map.entries()).sort((a,b)=>b[1]-a[1]))  //哈希排序
//         let keys = Array.from(map.keys())
//         // console.log(map.size,keys.length);
//         if(keys.length>n){
//             // 充足的情况
//             for(let i=0;i<=n;i++){
//                 count++
//                 let num = map.get(keys[i])
//                 if(num===1){
//                     map.delete(keys[i])
//                 }else{
//                     map.set(keys[i],num-1)
//                 }
//             }
//         }else{
//             // 不足的情况
//             for(let i=0;i<keys.length;i++){
//                 count++
//                 let num = map.get(keys[i])
//                 if(num===1){
//                     map.delete(keys[i])
//                 }else{
//                     map.set(keys[i],num-1)
//                 }
//             }
//             if(map.size) count += (n-keys.length+1)
//         }  
//     }
//     return count
// };

// 贪心
var leastInterval = function(tasks, n) {
    let map = new Map()
    tasks.forEach((task)=>map.set(task,(map.get(task) || 0)+1))
    map = new Map(Array.from(map.entries()).sort((a,b)=>b[1]-a[1]))  //哈希排序
    //因为相同元素必须有n个冷却时间，假设A出现3次，n = 2，任务要执行完，至少形成AXX AXX A序列（X看作预占位置）
    //该序列长度为
    let key = Array.from(map.keys())
    let maxLen = map.get(key[0])
    // console.log(map.keys().next().value);
    let minLen = (n+1) * (maxLen-1) + 1
    //此时为了尽量利用X所预占的空间（贪心）使得整个执行序列长度尽量小，将剩余任务往X预占的空间插入
    //剩余的任务次数有两种情况：
    //1.与A出现次数相同，比如B任务最优插入结果是ABX ABX AB，中间还剩两个空位，当前序列长度+1
    //2.比A出现次数少，若还有X，则按序插入X位置，比如C出现两次，形成ABC ABC AB的序列
    //直到X预占位置还没插满，剩余元素逐个放入X位置就满足冷却时间至少为n
    for(let i=1; i<key.length;i++){
        if(map.get(key[i]) == maxLen) minLen++
    }
    return Math.max(minLen, tasks.length);
};

// console.log(leastInterval(["A","A","A","B","B","B"],2));  //8
console.log(leastInterval(["G","A","A","A","A","A","B","C","D","E","F","A"],2));
// console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"],2));