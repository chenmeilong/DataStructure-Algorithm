
// 广度优先搜索
var findOrder = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0)
    let graph = {}
    //构建邻接表
    prerequisites.forEach((item)=>{
        inDegree[item[0]]++
        graph[item[1]] = graph[item[1]] || []
        graph[item[1]].push(item[0])
    })
    let result = []
    let queue = []
    // console.log(graph);
    // console.log(inDegree);
    inDegree.forEach((num,index)=>{
        if(num===0) queue.push(index)
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
    return result.length===numCourses?result:[]
};


console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]));