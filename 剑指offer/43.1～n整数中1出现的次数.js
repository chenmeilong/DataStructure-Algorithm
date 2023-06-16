

/**
 * @param {number} n
 * @return {number}
 */
// 自己想的数学法  一次计算每一位的1
var countDigitOne = function(n) {
    let leave = n
    let gain = 10
    let count = 0
    while(leave>0){
        count = count + Math.floor(n/gain) * gain/10
        // console.log(n%gain)
        let position = Math.floor(n*10/gain)%10  //表示当前位 个十百千万
        // console.log('posi',position)
        if(position>1){
            count = count + gain/10
        }else if(position==1){
            count = count + n%(gain/10)+1
        }
        // console.log(leave,gain,count)
        gain *= 10
        leave = Math.floor(leave/10)
    }
    return count
};

console.log(countDigitOne(112))