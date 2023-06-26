// 广度优先搜索
// let node = queue.shift()   //这行代码导致很慢  这里需要优化
var maxLevelSum = function(root) {
    let queue = [root]
    let layer = 0
    let maxLayer = 0
    let max = -Infinity
    while(queue.length){
        layer++
        let len = queue.length
        let sum = 0
        let newQ = []
        for(let node of queue){
            if(node.left) newQ.push(node.left)
            if(node.right) newQ.push(node.right)
            sum += node.val
        }
        if (sum>max) {
            max = sum
            maxLayer = layer
        }
        queue = newQ
    }
    return maxLayer
};

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(3,null,null)
root.left = new Node(9,null,null)
root.right = new Node(20,null,null)
root.right.left = new Node(15,null,null)
root.right.right = new Node(7,null,null)

console.log(maxLevelSum(root));