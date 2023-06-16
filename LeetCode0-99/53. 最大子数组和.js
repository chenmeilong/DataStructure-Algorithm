//动态规划 空间优化后的版本
//动态规划将问题拆分为有相互关联性的子问题求解，看成经过index的的连续数组的最大值=》以index结尾的连续子数组的的最大值
//走完这一生 如果我和你在一起会变得更好，那我们就在一起，否则我就丢下你。 我回顾我最光辉的时刻就是和不同人在一起，变得更好的最长连续时刻
var maxSubArray = function(nums) {
    if(nums.length===0) return 0
    let pre = 0
    let max = -99999999
    nums.forEach((num)=>{
        pre = Math.max(pre+num,num)
        max = Math.max(max,pre)
    })
    return max
};
console.log(maxSubArray([5,4,-1,7,8]));