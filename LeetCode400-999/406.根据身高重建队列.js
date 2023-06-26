//先由高到低排序 ，注意登高的人要按ki升序排列
// 时间复杂度为n，空间复杂度为logn因为排序需要logn空间
var reconstructQueue = function(people) {
    people.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:b[0]-a[0])
    let result = []
    people.forEach(arr=>result.splice(arr[1],0,arr))
    return result
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));