/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode()
    let next = head
    let c = 0
    while(l1 || l2){
        let num = c
        if(l1) {
            num+=l1.val
            l1=l1.next
        }
        if(l2){
            num+=l2.val
            l2=l2.next
        }
        c=Math.floor(num/10)
        num %=10 
        next.next = new ListNode(num)
        next = next.next
    }
    if(c>0) next.next =  new ListNode(c)
    return head.next
};