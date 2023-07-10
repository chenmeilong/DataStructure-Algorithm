var intToRoman = function(num) {
    let arr = [[1000,'M'],[900,'CM'],[500,'D'],[400, "CD"], [100, "C"], 
    [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
    
    let i=0
    let res = []
    while(i<arr.length){
        if(num>=arr[i][0]){ 
            num-=arr[i][0]
            res.push(arr[i][1])
        }else{
            i++
        }
    }
    return res.join('')
};
console.log(intToRoman(3));