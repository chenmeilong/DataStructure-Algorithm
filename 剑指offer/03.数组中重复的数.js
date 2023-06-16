
/**
 * @param {number[]} nums
 * @return {number}
 */
//暴力indexOf

//法一   使用set的正常写法
// var findRepeatNumber = function(nums) {
//     let set = new Set()
//     for(let i=0; i<nums.length; i++) {
//         if(set.has(nums[i])) {
//             return nums[i]
//         }else{
//             set.add(nums[i])
//         }
//     }
// };


//法二 原地哈希  时间复杂度为n 空间复杂度为1  的  巧妙解法  需要利用好题目的条件   这种方法不容易想到切容易出错，慎用
// var findRepeatNumber = function(nums) {
//     let i = 0
//     while(i < nums.length){
//         if(nums[i] == i){
//             i++
//             continue
//         }
//         else if ( nums[nums[i]] === nums[i]){
//             return nums[i]
//         }
//         else{
//             let tmp = nums[i]
//             nums[i] = nums[tmp]
//             nums[tmp] = tmp
//         }
//     }
//     return -1
// }



// //法三 nlogn 空间1   二分比较巧妙
// var findDuplicate = function(nums) {
//     const n = nums.length;
//     let l = 1, r = n - 1, ans = -1;
//     while (l <= r) {
//         let mid = (l + r) >> 1;
//         let cnt = 0;
//         for (let i = 0; i < n; ++i) {
//             cnt += nums[i] <= mid;
//         }
//         if (cnt <= mid) {
//             l = mid + 1;
//         } else {
//             r = mid - 1;
//             ans = mid;
//         }
//     }
//     return ans;
// };

//方法四 快慢指针 ,看成检查有没有环的问题，时间on 空间1
// var findRepeatNumber = function(nums) {
//     let slow = 0, fast = 0;
//     do {
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//     } while (slow != fast);
//     slow = 0;
//     while (slow != fast) {
//         slow = nums[slow];
//         fast = nums[fast];
//     }
//     return slow;
// };

//方法五 二进制 空间o1 时间nlogn
var findRepeatNumber = function(nums) {
    const n = nums.length;
    let ans = 0;
    // 确定二进制下最高位是多少
    let bit_max = 31;
    while (!((n - 1) >> bit_max)) {
        bit_max -= 1;
    }
    for (let bit = 0; bit <= bit_max; ++bit) {
        let x = 0, y = 0;
        for (let i = 0; i < n; ++i) {
            if (nums[i] & (1 << bit)) { //统计所有的nums中的数 bit个数
                x += 1;
            }
            if (i >= 1 && (i & (1 << bit))) { // 统计index中 bit个数
                y += 1;
            }
        }
        if (x > y) {   
            ans |= 1 << bit;
        }
    }
    return ans;
};
console.log(findRepeatNumber([3,1,3,4,2]))