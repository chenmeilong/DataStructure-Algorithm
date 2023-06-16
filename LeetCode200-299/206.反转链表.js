//迭代
// var reverseList = function(head) {
//     let pre = null
//     let node = head
//     while(node){
//         let next = node.next
//         node.next = pre
//         pre = node
//         node = next
//     }
//     return pre
// };

// //递归
// var reverseList = function(head) {
//     if (head == null || head.next == null) {
//         return head;
//     }
//     let newHead = reverseList(head.next)
//     head.next.next = head
//     head.next = null
//     return newHead
// };



//复习反转链表 迭代法
var reverseList = function(head) {
    if(head == null ||head.next===null) return head
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
};