// 贪心+排序

// 先算出reward2的总分数，算出diff，最后排序diff，在找到最大分数


var miceAndCheese = function(reward1, reward2, k) {
    let diff = []
    let score = 0
    for(let i=0;i<reward2.length;i++){
        score+=reward2[i]
        diff.push(reward1[i]-reward2[i])
    }
    diff.sort((a,b)=>a-b)
    while(k--){
        score+=diff.pop()
    }
    return score
};