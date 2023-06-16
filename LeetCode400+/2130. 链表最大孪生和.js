
// 快慢指正+翻转链表
var pairSum = function(head) {
    let fast = head.next.next
    let slow = head
    while(fast){
        fast = fast.next.next
        slow = slow.next
    }
    let max = -Infinity
    // 使用翻转链表 时间换空间实现空间复杂度为1
    slow = slow.next
    let pre = null
    while(slow){
        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }

    slow = head
    while(pre){
        max = Math.max(max,pre.val + slow.val)
        pre = pre.next
        slow = slow.next
    }

    return max
};