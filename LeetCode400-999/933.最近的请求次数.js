var RecentCounter = function() {
    this.queue = []
    this.start = 0
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while(this.queue[this.start]!==undefined && t-this.queue[this.start]>3000) this.start++
    return this.queue.length-this.start
};

var obj = new RecentCounter()
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));