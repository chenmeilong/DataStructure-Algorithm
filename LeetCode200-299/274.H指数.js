
// 使用 改进快排解题
var hIndex = function(citations) {
    const swap = (arr,i,j)=>{
        let buff = arr[i]
        arr[i] = arr[j]
        arr[j] = buff
    }
    const quickSort = (left,right)=>{
        if(right<left) return
        let i = left
        let j = right
        let key = left
        while(i<j){
            while(i<j && citations[j]<=citations[key]) j--
            while(i<j && citations[i]>=citations[key]) i++
            if(i<j) swap(citations,i,j)
        }
        swap(citations,i,left)
        if(citations[i]>=i+1){
            res = Math.max(res,i+1)
            quickSort(i+1,right)
        }else{
            quickSort(left,i-1)
        }
    }
    let res = 0
    quickSort(0,citations.length-1)
    return res
};

console.log(hIndex([1,3,1]));