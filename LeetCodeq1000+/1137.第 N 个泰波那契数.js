var tribonacci = function(n) {
    if(n<2) return n
    if(n<3) return n-1
    let arr  = [0,1,1]
    for(let i=3; i<=n; i++){
        let next = arr[0] + arr[1] + arr[2]
        arr[0] = arr[1]
        arr[1] = arr[2]
        arr[2] = next
    }
    return arr[2]
};