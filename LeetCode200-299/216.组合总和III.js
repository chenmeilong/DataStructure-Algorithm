// 经典剪枝
var combinationSum3 = function(k, n) {
    const res = []
    const digui = function(start,layer,buff,sum){
        if(layer===k){
            if(sum===n) res.push(buff.slice(0))
            return null
        }
        for(let i=start;i<=9;i++){
            // 不可重复选择同一个数字
            if(buff.indexOf(i)===-1){
                buff.push(i)
                sum+=i
                digui(i+1,layer+1,buff,sum)
                buff.pop()
                sum-=i
            }
        }
        
    }
    digui(1,0,[],0)
    return res
};

console.log(combinationSum3(3,7));