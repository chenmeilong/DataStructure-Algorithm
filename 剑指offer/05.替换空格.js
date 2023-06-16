
// 替换空格

/**
 * @param {string} s
 * @return {string}
 */

//自己写的方法
// var replaceSpace = function(s) {
//     while(s.indexOf(' ')!=-1){
//         s = s.replace(' ','%20')
//     }
//     return s
// };

//法一
var replaceSpace = function(s) {
    return s.replace(/ /g,'%20')
};
////////////////////////////////
//法二
// var replaceSpace = function(s) {
//     return s.split(' ').join('%20')
// };
/////////////////////////////////
// 法三 据说这个造轮子 方法很快  但是提交并不快

/*
var replaceSpace = function(s) {
    s = s.split("")
    let oldlen = s.length
    let spacelen = 0
    for (let i = 0; i<s.length; i++){
        if(s[i]===' ') spacelen++
    }
    s.length+=spacelen*2
    for(let i=oldlen-1,j=s.length-1; i>=0;i--,j--){
        if(s[i]!=' '){
            s[j] = s[i]
        }else{
            s[j-2] = '%'
            s[j-1] = '2'
            s[j] = '0'
            j-=2
        }
    }
    return s.join('')
};
*/

console.log(replaceSpace("    "))