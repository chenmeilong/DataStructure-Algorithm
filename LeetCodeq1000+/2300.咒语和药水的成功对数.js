

var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=>a-b)
    let n = potions.length
    let res = []

    const potionsNum = function(spell,potions,success){
        // 二分查找  spell*potion>=success 恰好称为的位置 再计算都成了的个数
        let left = 0
        let right = potions.length -1

        while(left<right){
            let mid = Math.floor((left + right)/2)
            if(spell*potions[mid]>=success){
                right = mid
            }else{
                left = mid +1
            }
        }
        return potions.length-left
    }


    for(let spell of spells){
        let num = 0
        if(spell*potions[0]>=success){
            // 咒语对最小药剂的药水有效，则对所有药剂有效
            num = n
        }else if(spell*potions[n-1]>=success){
            // 咒语对最大的药剂有效，则需要二分去查找具体多少个有效
            num = potionsNum(spell,potions,success)
        }
        // 咒语对最大的药剂都无效，则对所有的药剂都无效，所以是num = 0 ,所以不用写出来
        res.push(num)
    }
    return res
};

console.log(successfulPairs([5,1,3],[5,2,4,1,3],7));