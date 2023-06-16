// 滑动窗口
var findAnagrams = function(s, p) { 
    let result = []
    let n = p.length
    
    // 初始化map
    let pmap = new Map()
    let map = new Map()
    for(let chart of p){
        pmap.set(chart,(pmap.get(chart) || 0) + 1)
        map.set(chart,0)
    }
    // 初始化 窗口
    for(let i=0;i<n;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }
    }
    if(Array.from(map.keys()).every((key)=>map.get(key)===pmap.get(key))){  
        result.push(0)
    }

    for(let i=n;i<s.length;i++){
        //删除窗口前一个
        if(map.has(s[i-n])){
            map.set(s[i-n],map.get(s[i-n])-1)
        }
        //新增
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1)
        }
        //判断
        if(Array.from(map.keys()).every((key)=>map.get(key)===pmap.get(key))){  
            result.push(i-n+1)
        }
    }
    return result
};
console.log(findAnagrams("cbaebabacd","abc"));
// console.log(findAnagrams("baa","aa"));