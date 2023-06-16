/**
 * @param {string} s
 * @return {string[]}
 */
//法一 回溯算法  + 剪枝   自己写的参考k神剪枝 （还有优化空间...参考力扣46）
var permutation = function(s) {
    let arr = []
    recall('',s)
    function recall(pre,str){
        if(str.length==1){
            arr.push(pre+str)
        }
        let layer = []
        for(let i = 0 ; i < str.length; i++){
            //剪枝
            if(layer.indexOf(str[i])==-1){
                layer.push(str[i])
                let subStr = str.slice(0,i)+str.slice(i+1,str.length)
                recall(pre+str[i],subStr)
            }
        }
    }
    return arr
};

// console.log(permutation('abc'))
console.log(permutation('aab'))