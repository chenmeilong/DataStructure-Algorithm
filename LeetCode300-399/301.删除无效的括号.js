var removeInvalidParentheses = function(s) {
    const helper = (str, start, lremove, rremove) => {
        if (lremove === 0 && rremove === 0) {
            if (isValid(str)) {  //需要排除()())(这种情况
                res.push(str);
            }
            return;
        }
        for (let i = start; i < str.length; i++) {
            if (i !== start && str[i] === str[i - 1]) {  //实现减枝  ））这种连续情况
                continue;
            }
            // 如果剩余的字符无法满足去掉的数量要求，直接返回，提高效率（其实没有也行）
            if (lremove + rremove > str.length - i) {
                return;
            } 
            // 尝试去掉一个左括号
            if (lremove > 0 && str[i] === '(') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove - 1, rremove);  //注意再从i开始寻找
            }
            // 尝试去掉一个右括号
            if (rremove > 0 && str[i] === ')') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove, rremove - 1);
            }
        }
    }
    const res = [];
    // 计算无效括号左右边的数量
    let lremove = 0;  
    let rremove = 0;
    for (const c of s) {
        if (c === '(') {
            lremove++;
        } else if (c === ')') {
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }
    helper(s, 0, lremove, rremove);
    return res;
}

const isValid = (str) => {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            cnt++;
        } else if (str[i] === ')') {
            cnt--;
            if (cnt < 0) {
                return false;
            }
        }
    }
    return cnt === 0;
}



// console.log(removeInvalidParentheses("()())()"));
// console.log(removeInvalidParentheses("(a)())()"));
console.log(removeInvalidParentheses("(()"));