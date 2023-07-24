var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i=0;i<magazine.length;i++){
        map.set(magazine[i],(map.get(magazine[i]) || 0 )+1)
    }
    for(let i =0;i<ransomNote.length;i++){
        if(map.has(ransomNote[i])){
            if(map.get(ransomNote[i])>1){
                map.set(ransomNote[i],map.get(ransomNote[i])-1)
            }else{
                map.delete(ransomNote[i])
            }
        }else{
            return false
        }
    }
    return true
};