
// 可优化字典树
var suggestedProducts = function(products, searchWord) {
    let preTree = {}
    for(let product of products){
        let children = preTree
        for(let chart of product){
            if(children[chart]===undefined){
                children[chart]={}
            }
            children = children[chart]
        }
        children['end'] = true
    }

    // 深度优先搜索 实现剪枝 只搜索前三个值
    const findPreThreeNode = function(root){
        let res = []
        const dfs = function(node,charts){
            if(node.end===true){
                res.push(charts.join(''))
                if(res.len>=3) return 3
            }
            for(let key of Object.keys(node).sort()){ //对key 排序 后再取值
                charts.push(key)
                let len = dfs(node[key],charts)
                charts.pop()
                if(len>=3) return 3
            }
            return res.length
        }
        dfs(root,[])
        return res
    }


    let res = []
    let children = preTree
    for(let i=0;i<searchWord.length;i++){
        if(children[searchWord[i]]!==undefined){
            children = children[searchWord[i]]
            let search = findPreThreeNode(children).map(value=>searchWord.slice(0,i+1)+value)
            res.push(search)
            
        }else{
            res.push([])
            children = {}
        }
    }
    return res
 };


 console.log(suggestedProducts(["bags","baggage","banner","box","cloths"],"bags"));