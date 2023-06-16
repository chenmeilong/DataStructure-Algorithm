
var Trie = function() {
    this.children = {}
};
//前缀树
Trie.prototype.insert = function(word) {
    let node = this.children
    for(let chart of word){
        if(!node[chart]) node[chart] = {}
        node = node[chart]
    }
    node.isEnd = true
};

Trie.prototype.search = function(word) {
    let node = this.children
    for(let chart of word){
        if(!node[chart]){return false}
        node = node[chart]
    }
    return node.isEnd===true   //这是重点 结束符
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.children
    for(let chart of prefix){
        if(!node[chart]){return false}
        node = node[chart]
    }
    return true
};
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 True
console.log(trie.search("app"));   // 返回 False
console.log(trie.startsWith("app")); // 返回 True
trie.insert("app");
console.log(trie.search("app"));     // 返回 True