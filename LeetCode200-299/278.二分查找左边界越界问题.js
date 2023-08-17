var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left =1
        let right =n
        while(left<right){
            // 位操作符（包括右移操作符）只能处理 32 位的整数，涉及太大的数字不要用位移
            let mid = Math.floor((left+right)/2)
            if(isBadVersion(mid)){
                right=mid
            }else{
                left = mid+1
            }
        } 
        return left
    };
};