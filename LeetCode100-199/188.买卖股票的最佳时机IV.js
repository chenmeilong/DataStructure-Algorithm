var maxProfit = function(k, prices) {
    let dpHode = new Array(k).fill(-prices[0])
    let dpSale = new Array(k).fill(0)

    for(let i=1;i<prices.length;i++){
        for(let j=0;j<k;j++){
            if(j==0) dpHode[j] = Math.max(dpHode[j],-prices[i])
            else dpHode[j] =  Math.max(dpHode[j],dpSale[j-1]-prices[i])
            dpSale[j] = Math.max(dpSale[j],dpHode[j]+prices[i])
        }
    }
    return Math.max(...dpSale)
};

console.log(maxProfit(2,[2,4,1]));