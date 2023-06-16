const {MinHeap,MaxHeap} = require('../MyHeap.js')


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//优先队列
// var mergeKLists = function(lists) {
//     if(!(lists instanceof Array) || lists.length==0) return null
//     if(lists.length==1) return lists[0]
//     const heap = new MinHeap((a,b)=> a[1] > b[1] ? 1 : -1)
//     let head = new ListNode()
//     let node = head
//     for (let i = 0 ; i<lists.length ; i++){
//         if(lists[i]!==null){
//             heap.insert([i,lists[i].val])
//             lists[i] = lists[i].next
//         }
//     }
//     while(heap.size()){
//         let min = heap.extract()
//         node.next = new ListNode(min[1])
//         node = node.next
//         if(lists[min[0]]!==null){
//             heap.insert([min[0],lists[min[0]].val])
//             lists[min[0]] = lists[min[0]].next
//         } 
//     }
//     return head.next
// };

//分治算法
var mergeKLists = function(lists) {
    if(!(lists instanceof Array) || lists.length==0) return null
    if(lists.length==1) return lists[0]
    return fenzhi(0,lists.length)
    function fenzhi(left,right){
        if(left+1==right) return lists[left]
        let mid = Math.floor((left+right)/2)
        let list1 = fenzhi(left,mid)
        let list2 = fenzhi(mid,right)
        return merge(list1,list2)
    }
    function merge(list1,list2){
        let head = new ListNode()
        let node = head
        while(list1 && list2){
            if(list1.val>list2.val){
                node.next = list2  //直接复制效率高
                list2 = list2.next
            }else{
                node.next =list1
                list1 = list1.next
            }
            node = node.next
        }
        if(list1==null) node.next = list2
        else node.next = list1
        return head.next
    }
};





function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

list1 = new ListNode(1)
list1.next =  new ListNode(4)
list1.next.next =  new ListNode(5)
list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)
list3 = new ListNode(2)
list3.next = new ListNode(6)

console.log(mergeKLists([list1, list2, list3]));