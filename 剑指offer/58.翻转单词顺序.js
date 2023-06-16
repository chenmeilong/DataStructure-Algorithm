/**
 * @param {string} s
 * @return {string}
 */
//自己写的双指针，时间和空间都是个位数 看起来都是O(n)、O(n)
// var reverseWords = function(s) {
//     s = ' '+s
//     let start = s.length-1
//     let end = s.length-1
//     let newStr = ''
//     while(start>=0){
        
//         if(s[start] == ' ' && s[end] == ' '){
//             start--
//             end--
//         }else if(s[start] != ' ' && s[end] != ' '){
//             start--
//         }else if(s[start] == ' ' && s[end] != ' '){
//             //开始拷贝
//             console.log(start)
//             newStr = newStr + s.slice(start+1, end+1) +' '
//             end=start
//         }else{
//             console.log('不会出现这种情况')
//         }
//     }
//     return newStr.slice(0,newStr.length-1)
// };

//看答案改进后的双指针
var reverseWords = function(s) {
    s = s.trim()
    let start = s.length - 1
    let end = s.length - 1
    let res = []
    while (start >=0){
        while(start >=0 && s[start]!=' '){
            start -- //找到首个空格
        }
        res.push(s.slice(start+1,end+1))
        while(s[start]==' '){
            start--
        }
        end = start
    }
    return res.join(' ')
};


// var reverseWords = function(s) {
//     return s.trim().split(/\s+/).reverse().join(' ');
// };


// console.log(reverseWords('   heallo world!  '))



console.log(reverseWords("  the sky is blue  "))