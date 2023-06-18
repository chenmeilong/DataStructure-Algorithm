// 自己写的， 建立图，在使用图的遍历寻找，寻找路径的值
var calcEquation = function(equations, values, queries) {
    // 构建图
    let map = new Map()
    for(let i=0 ; i<equations.length; i++){
        let [a,b] = equations[i]
        map.set(a,[...(map.get(a) || []),{b:b,val:values[i]}])
        map.set(b,[...(map.get(b) || []),{b:a,val:1/values[i]}])
    }
    console.log(map);
    let res = []
    for(let que  of queries){
        if(map.has(que[0]) && map.has(que[1])){
            // 存在图中
            if(que[0]===que[1]){
                res.push(1)
            }else{
                // 去图中搜索相关性  并计算出对应的值
                let dis = lin(que[0],que[1])
                if(dis===false) dis = -1
                res.push(dis)
            }
        }else{
            res.push(-1)
        }
    }
    return res

    function lin(start,end){
        let find = new Set()  //保持单向
        console.log(start,end);
        let res = dfs(start,end)
       
        return res
        function dfs(start,end){
            console.log(start,end);
            if(find.has(start)) return false
            if(start===end) return true

            let arr = map.get(start)
            find.add(start)
            for(let obj of arr){
                let res = dfs(obj.b,end)
                if(res!==false){
                    return res * obj.val
                }
            }
            return false
        }
    }
};

console.log(calcEquation([["a","b"],["c","d"]],[1.0,1.0],[["a","c"]]));

