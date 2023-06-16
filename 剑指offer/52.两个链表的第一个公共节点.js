/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//开始题目没理解正确
//哈希集合 时间O(n+m) 空间O（n）  
// var getIntersectionNode = function(headA, headB) {
//     let  headAbuff = headA
//     let set = new Set()
//     while(headAbuff!=null){
//         set.add(headAbuff)
//         headAbuff = headAbuff.next
//     }
//     let headBbuff = headB
//     while(headBbuff!=null){
//         if(set.has(headBbuff)){
//             return headBbuff
//         }
//         headBbuff = headBbuff.next
//     }
// };

//双指针 方法巧妙
var getIntersectionNode = function(headA, headB) {
    if (headA==null|| headB==null) return null
    let pA = headA
    let pB = headB
    while(pA != pB){
        pA = pA==null ? headB : pA.next
        pB = pB==null ? headA : pB.next
    }
    return pB
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
let firstNode = new ListNode(1)
firstNode.next = new ListNode(2)
firstNode.next.next = new ListNode(4)

let secondNode = new ListNode(3)
secondNode.next = new ListNode(2)
secondNode.next.next = firstNode.next.next


let newNode = getIntersectionNode(firstNode,secondNode)
console.log(newNode)
while(newNode!=null){
    console.log(newNode.val,'==>')
    newNode = newNode.next
}