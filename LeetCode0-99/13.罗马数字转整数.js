 

 var romanToInt = function(s) {
    let res = 0
    let arr = s.split('')
    // console.log(arr);
    let map = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
    for(let i=0;i<arr.length;i++){
        if((i<arr.length-1 && map.get(arr[i])>=map.get(arr[i+1])) || i===arr.length-1){
            res += map.get(arr[i])
        }else{
            res-=map.get(arr[i])
        }
    }
    return res
 };

 console.log(romanToInt('LVIII'));