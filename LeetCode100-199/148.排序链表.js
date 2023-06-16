//放入数组排序 时间nlogn空间n
var sortList = function(head) {
    if(head===null || head.next===null) return head
    let arr = []
    let node = head
    while(node){
        arr.push(node)
        node = node.next
    }
    arr.sort((a,b)=>a.val-b.val)
    for(let i =0;i<arr.length-1;i++){
        arr[i].next = arr[i+1]
    }
    arr[arr.length-1].next = null
    return arr[0]
};
//优最佳解法，自底向上归并排序 时间nlogn 空间1 ，写下去挺麻烦的


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head =  new ListNode(4)
head.next =  new ListNode(2)
head.next.next =  new ListNode(1)
// head.next.next.next  =  new ListNode(3)
console.log(sortList(head));