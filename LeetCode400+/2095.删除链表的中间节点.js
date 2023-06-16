
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteMiddle = function(head) {
    if(head.next===null) return null
    let fast = head
    let slow = head
    let preslow = head
    while(fast && fast.next){
        preslow = slow
        fast = fast.next.next
        slow = slow.next
    }
    preslow.next = slow.next
    return head
};