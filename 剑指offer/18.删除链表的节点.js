/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 迭代+虚拟节点
// var deleteNode = function(head, val) {
//     if(head.val == val) return head.next
//     let next = head
//     while(next.next!=null){
//         if(next.next.val == val){
//             next.next = next.next.next
//             break
//         }
//         next = next.next
//     }
//     return head
// };


//递归
function deleteNode(head, val){
     // 递归的终止条件：head 等于空的时候，直接返回 head，因为一个空的链表是没法删除的
    if(head == null) return null
    // head 结点的值等于 val，直接返回 head 结点的下一个结点，相当于删除了当前节点
    if (head.val == val) return head.next
    // 递归调用判断下一个节点是否等于 val
    head.next = deleteNode(head.next,val)
    return head
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(4)
head.next = new ListNode(5)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(9)


console.log(deleteNode(head,5))