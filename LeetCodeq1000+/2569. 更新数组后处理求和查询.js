
// 暴力超时，元题解法是线段树 ，CV过的
var handleQuery = function(nums1, nums2, queries) {
    let res = []
    for(let querie of queries){
        if(querie[0]===1){
            let l = querie[1]
            let r = querie[2]
            while(l<=r){
                nums1[l] =  nums1[l]===0?1:0
                l++
            }

        }else if(querie[0]===2){
            for(let i=0;i<nums2.length;i++){
                nums2[i] = nums2[i] + nums1[i]*querie[1]
            }
        }else if(querie[0]===3){
            res.push(nums2.reduce((sum,num)=>sum+num,0))
        }
    }
    return res
};