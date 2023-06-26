var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    
    let buff1 = []
    Array.from(set1.keys()).forEach(num=>{
        if(!set2.has(num)) buff1.push(num)
    })
    let buff2 = []
    Array.from(set2.keys()).forEach(num=>{
        if(!set1.has(num)) buff2.push(num)
    })
    return [buff1,buff2]
};

console.log(findDifference([1,2,3],[2,4,6]));