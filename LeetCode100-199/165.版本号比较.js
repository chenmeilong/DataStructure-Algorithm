var compareVersion = function(version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')
    let len  = Math.max(version1.length,version2.length)
    let i=0
    while(i<len){
        let left = parseInt(version1[i]) || 0
        let right = parseInt(version2[i]) || 0
        if(left>right) return 1
        else if(left<right) return -1
        i++
    }
    return 0
};