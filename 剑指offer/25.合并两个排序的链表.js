/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


//自己写的时间90 空间80 迭代法  比较冗余
// var mergeTwoLists = function(l1, l2) {
//     if(l1==null && l2 == null) return null
//     if(l1==null || l2 == null) return l1 || l2
//     let newNode
//     if (l1.val<l2.val){
//         newNode = l1
//         l1 = l1.next
//     }else{
//         newNode = l2
//         l2 = l2.next
//     }
//     let newhead = newNode

//     while(l1!=null && l2!=null){
//         if (l1.val < l2.val){
//             newNode.next = l1
//             l1 = l1.next
//         }else{
//             newNode.next = l2
//             l2 = l2.next
//         }
//         newNode = newNode.next
//     }
//     if(l1 == null) newNode.next = l2
//     if(l2 == null) newNode.next = l1
//     return newhead
// };



//迭代法  巧妙的思想优化 时间O（m+n） 空间（m+n）
var mergeTwoLists = function(l1, l2) {
    if(l1==null && l2 == null) return null
    if(l1==null || l2 == null) return l1 || l2
    let newNode = new ListNode(-1)
    let newhead = newNode
    while(l1!=null && l2!=null){
        if (l1.val < l2.val){
            newNode.next = l1
            l1 = l1.next
        }else{
            newNode.next = l2
            l2 = l2.next
        }
        newNode = newNode.next
    }
    newNode.next = l1==null ? l2 : l1
    return newhead.next
};


//递归法  自己想的，答案那种递归没看懂
// var mergeTwoLists = function(l1, l2) {
//     //结束条件
//     if (l1==null && l2 == null) return null
//     let flage = true
//     if (l1==null || l2==null){
//         if(l1==null) flage  = false
//         else flage  = true
//     }else{
//         if(l1.val < l2.val) flage  =true
//         else  flage  = false
//     }

//     let newNode = flage ? new ListNode(l1.val):new ListNode(l2.val)
//     newNode.next = flage ? mergeTwoLists(l1.next, l2):mergeTwoLists(l1, l2.next)
//     return newNode
// };





function ListNode(val) {
    this.val = val;
    this.next = null;
}
let firstNode = new ListNode(1)
firstNode.next = new ListNode(2)
firstNode.next.next = new ListNode(4)

let secondNode = new ListNode(1)
secondNode.next = new ListNode(3)
secondNode.next.next = new ListNode(4)


let newNode = mergeTwoLists(firstNode,secondNode)
while(newNode!=null){
    console.log(newNode.val,'==>')
    newNode = newNode.next
}