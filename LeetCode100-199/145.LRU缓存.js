// LRU（Least Recently Used）缓存是一种缓存替换策略
//面试官面试这题，应该是要考察双向链表+hashMap的使用熟练度 map存放链表key的节点，可实现O(1)，注意链表要使用虚拟头结点和尾结点来减少代码量

//这利用了map的有序性实现的
var LRUCache = function (capacity) {
    // 利用hash进行缓存，最后set的元素会存在与map的最后一位
    this.cache = new Map();
    // 最大缓存长度
    this.maxCacheLength = capacity;
};

LRUCache.prototype.get = function (key) {
    if (this.cache.get(key) !== undefined) {
        const value = this.cache.get(key);
        /*
        将操作元素删除，再用set添加，即可以把该操作元素放置到map对象的最后;
        map对象的缓存更新机制利用队列先进先出的机制;
        所以每get一次元素，就将该元素放置到队列最后;
        */
        this.cache.delete(key);
        this.cache.set(key, value);
        return this.cache.get(key);
    }
    return -1;
};

LRUCache.prototype.put = function (key, value) {
    // 与get同理，如果修改了元素，将元素放置在队列最后
    if (this.cache.get(key) !== undefined) {
        this.cache.delete(key);
        this.cache.set(key, value);
    } else {
        this.cache.set(key, value);
    }
    // 如果超出长度，删除对象中的第一项，即就是最长未操作的缓存元素
    if (this.cache.size > this.maxCacheLength) {
        // map对象调用keys()方法，会返回一个MapIterator迭代器，可以用next方法遍历，类似generator
        this.cache.delete(this.cache.keys().next().value);
    }
};


let lru = new LRUCache(2)
lru.put(2,1)
lru.put(3,2)
console.log(lru.get(3)); //1
console.log(lru.get(2)); //-1
lru.put(4,3)
// console.log(lru.get(2)); //-1 
// console.log(lru.get(3)); //1
// console.log(lru.get(4)); //1




// let lru = new LRUCache(1)
// lru.put(2,1)
// console.log(lru.get(2)); //1
// lru.put(3,2)
// console.log(lru.get(2)); //-1
// console.log(lru.get(3)); //2