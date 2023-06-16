/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//自己写的方法时间O(n) 空间O（1）
// var getKthFromEnd = function(head, k) {
//     let nodeNum = 0
//     let next = head
//     while(next!=null){
//         nodeNum++
//         next = next.next
//     }
//     next = head
//     let index = nodeNum-k
//     while(next!=null){
//         if(index==0) return next
//         index--
//         next = next.next
//     }
//     return null
// };

// 参考答案 思想比较巧妙 时间O(n) 空间O（1）   双双百分之90
var getKthFromEnd = function(head, k) {
    let formatNode =head
    let lastNode = head
    for (let i=0 ; i<k; i++){
        formatNode = formatNode.next
    }
    while(formatNode!=null){
        lastNode = lastNode.next
        formatNode = formatNode.next
    }
    return lastNode
};





function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)


console.log(getKthFromEnd(head,2))
console.log(getKthFromEnd(new ListNode(1),1))