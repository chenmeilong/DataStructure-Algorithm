/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim()

    let index
    let signal
    if(str[0]=='+'){
        signal = true
        index = 1
    }else if(str[0]=='-'){
        signal = false
        index=1
    }
    else if(str[0]>='0' && str[0]<='9'){
        signal = true
        index=0
    }else{
        return 0
    }
    let num=0
    while(str[index]>='0' && str[index]<='9'){
        num = num*10 + parseInt(str[index])
        //优化  //
        index++
    }

    if(num>=Math.pow(2,31)){
        num = signal ? Math.pow(2,31)-1 : num = Math.pow(2,31)
    }
    return signal?num :-num
};

//官方题解是自动机 感觉很繁琐
//自动机 建立 状态映射
// var strToInt = function(s) {
//     const map ={'start':['start','sign','num','end'],
//                 'sign':['end','end','num','end'],
//                 'num':['end','end','num','end'],
//                 'end':['end','end','end','end']}
//     let state = 'start'
//     let sign = 1
//     let num = 0
//     for(let i = 0 ; i < s.length ; i++){
//         state = map[state][getState(s[i])]
//         if(state==='sign'){
//             sign = s[i]==='+'? 1 : -1
//         }else if(state==='num'){
//             num = num*10+(+s[i])
//             if(num>=Math.pow(2,31)){
//                 num = sign>0? Math.pow(2,31)-1:Math.pow(2,31)
//             }
//         }
//     }
//     return sign*num

//     function getState(chart){
//         if(chart===' ') return 0
//         else if(chart==='+' || chart==='-') {
//             return 1
//         }else if(chart>='0' && chart<='9'){
//             return 2
//         }else{
//             return 3
//         }
//     }
// };


console.log(strToInt('   -42'));
console.log(strToInt('2'));