var reverse = function(x) {
    let pos = x>0?1:-1
    x = Math.abs(x)
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // (result | 0) 强制转换成int类型
    return (result | 0) === result ? result*pos : 0;
};
