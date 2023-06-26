
// 未参考题解
var predictPartyVictory = function(senate) {
    let arr = senate.split('')
    let rCount = 0  //禁
    let dCount = 0  //禁
    while(true){
        let arrbuff = []
        for(let i=0;i<arr.length;i++){
            if(arr[i]==='R'){
                if(dCount>0){
                    dCount--
                }else{
                    rCount++
                    arrbuff.push('R')
                }
            }else{
                if(rCount>0){
                    rCount--
                }else{
                    dCount++
                    arrbuff.push('D')
                }
            }
        }
        
        arr = arrbuff.slice(0)
        // 判断是否要break，看看arr里面是否全是r或者d
        if(rCount>=arr.length) return 'Radiant'
        if(dCount>=arr.length)  return 'Dire'
    }
};
console.log(predictPartyVictory("DRRDDR"));
// console.log(predictPartyVictory("DRD"));