
// 如果x到不了y+1（但能到y），那么从x到y的任一点出发都不可能到达y+1。因为从其中任一点出发的话，
// 相当于从0开始加油，而如果从x出发到该点则不一定是从0开始加油，可能还有剩余的油。
// 既然不从0开始都到不了y+1，那么从0开始就更不可能到达y+1了...
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length
    for(let i=0;i<n;i++){
        gas[i] = gas[i]-cost[i]
    }
    let res = 0
    while(res<n){
        let count = 0
        let cnt = 0
        // 计算(res+cnt)%n为起点是否能环行一圈
        while(cnt<n){
            let j = (res+cnt)%n
            count+=gas[j]
            if(count<0) break
            cnt++
        }
        if(cnt===n) return res
        // console.log(cnt,res,count);
        res = res + cnt + 1
    }
    return -1
};
console.log(canCompleteCircuit(gas = [1,1,1,0,1000], cost = [0,1000,0,0,0]));