
// 每层最右边的值
var rightSideView = function(root) {
    if (root===null) return []
    let right = []
    let queue = [root]
    while(queue.length){
        let newQ = []
        for(let i = 0 ; i<queue.length ; i++){
            if(queue[i].left) newQ.push(queue[i].left)
            if(queue[i].right) newQ.push(queue[i].right)
            if(i===queue.length-1) right.push(queue[i].val)
        }
        queue = newQ
    }
    return right
};


function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(1,null,null)
// root.left = new Node(9,null,null)
root.right = new Node(3,null,null)


console.log(rightSideView(root));