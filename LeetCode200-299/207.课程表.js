
//经典拓扑排序问题  广度优先搜索,更加入读为0操作 深度好像比较麻烦
var canFinish = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0)
    let graph = {}
    prerequisites.forEach(item=>{
        inDegree[item[0]]++
        graph[item[1]] = graph[item[1]] || []
        graph[item[1]].push(item[0])
    })
    let result = []
    let queue = []
    inDegree.forEach((count,index)=>{
        if(count===0) queue.push(index)
    })
    while(queue.length){
        let node = queue.shift()
        result.push(node)
        let toEnQueue = graph[node]
        if(toEnQueue){
            toEnQueue.forEach((classNum)=>{
                inDegree[classNum]--
                if(inDegree[classNum]===0) queue.push(classNum)
            })
        }
    }
    return result.length===numCourses
};

console.log(canFinish(2,[[1,0],[0,1]]));