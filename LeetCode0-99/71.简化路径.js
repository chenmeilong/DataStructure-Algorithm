var simplifyPath = function(path) {
    let pathArr = path.split('/')
    // 栈
    let resArr = []
    for(let i=0;i<pathArr.length;i++){
        if(pathArr[i]==='' || pathArr[i]==='.'){
            continue
        }else if(pathArr[i]==='..'){
            resArr.pop()
        }else{
            resArr.push(pathArr[i])
        }
    }
    console.log(resArr);
    return '/'+resArr.join('/')
};

console.log(simplifyPath(path = "/home/"));