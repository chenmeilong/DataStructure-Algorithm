//自己写的
// var getIntersectionNode = function(headA, headB) {
//     let a = headA
//     let b = headB
//     while(a!==b){
//         a = a.next
//         b = b.next
//         if(a===null && b===null) return null
//         if(a===null) a = headB
//         if(b===null) b = headA
//     }
//     return a
// };

//简写
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let nodeA = headA
    let nodeB = headB
    while(nodeA !== nodeB){
        nodeA = nodeA? nodeA.next:headB
        nodeB = nodeB? nodeB.next:headA
    }
    return nodeA  //隐藏了都为null返回null
};