var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast){
        if(fast.next===null) return false
        fast = fast.next.next
        slow = slow.next
        if(fast===slow){
            return true
        }
    }
    return false
};