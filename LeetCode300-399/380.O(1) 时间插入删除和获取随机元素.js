var RandomizedSet = function() {
    this.set = new Set()
};

RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) return false
    else{
        this.set.add(val)
        return true
    }
};

RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val)
        return true
    }
    else return false
};

RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor(Math.random()*this.set.size)
    return Array.from(this.set)[random]
};

var obj = new RandomizedSet()
console.log(obj.insert(1))
console.log(obj.insert(2))
console.log(obj.insert(3))
console.log(obj.remove(2))
console.log(obj.getRandom())