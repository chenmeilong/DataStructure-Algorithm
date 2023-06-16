/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//三种方法，遍历计数、栈、双指针
// var removeNthFromEnd = function(head, n) {
//     if(!(head instanceof ListNode)) return null
//     let count=0
//     let node = head
//     while(node){
//         count++
//         node = node.next
//     }
//     let i = 0
//     node = head
//     while(node){
//         i++
//         if(i===count-n){
//             node.next = node.next.next
//             return head
//         }
//         node = node.next
//     }
//     return head.next
// };

//栈
// var removeNthFromEnd = function(head, n) {
//     if(!(head instanceof ListNode)) return null
//     let stack = []
//     let node =head
//     while(node){
//         stack.push(node)
//         node = node.next
//     }
//     while(n){
//         stack.pop()
//         if(n==1 && stack.length){
//             node = stack.pop()
//             node.next = node.next.next
//             return head
//         }
//         n--
//     }
//     return head.next
// };

//双指针
var removeNthFromEnd = function(head, n) {
    if(!(head instanceof ListNode)) return null
    let left = head
    let right = head
    let count = 0
    while(right){
        count++
        right = right.next
        if(count>n+1){
            left=left.next
        }
    }
    if(count==n) head = head.next
    else left.next =left.next.next
    return head
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1)
head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)
console.log(removeNthFromEnd(head,2));