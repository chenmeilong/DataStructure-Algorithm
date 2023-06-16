//快慢指针第一次相遇的时候，第三个指针出发，slow与第三指针相遇即环的入口（数学公式推导），还有种做法是计算环大小在，找第k个元素
var detectCycle = function(head) {
    let slow = head
    let fast = head
    let three = head
    while(fast){
        if(fast.next) fast= fast.next.next
        else return null
        slow = slow.next
        if(fast===slow){
            while(three!=slow){
                slow = slow.next 
                three = three.next 
            }
            return three
        }
    }
    return null
};