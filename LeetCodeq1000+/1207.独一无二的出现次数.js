// map+set
var uniqueOccurrences = function(arr) {
    let map = new Map()
    arr.forEach(num=>map.set(num,(map.get(num) || 0)+1))
    let set = new Set(Array.from(map.values()))
    return map.size === set.size
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));