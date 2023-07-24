// 使用对象哈希的对更快
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false
    let st = new Map()
    let ts = new Map()
    for(let i=0;i<s.length;i++){
        if(st.has(s[i]) && ts.has(t[i])){
            // 相互有映射 判断映射的是否为他们的值
            if(ts.get(t[i])!==s[i] || st.get(s[i])!==t[i]) return false
        }
        else if(!st.has(s[i]) && !ts.has(t[i])){
            // 都没映射则建立映射关系
            st.set(s[i],t[i])
            ts.set(t[i],s[i])
        }else{
            // 一个有，一个无
            return false
        }
    }
    return true
};