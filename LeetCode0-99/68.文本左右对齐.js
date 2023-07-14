

var fullJustify = function(words, maxWidth) {
    let index = 0
    let res = []
    let buff = {
        words: [],
        strlen:0
    }
    while(index<=words.length){
        // console.log(buff.strlen+buff.words.length-1,maxWidth,index);
        if(buff.strlen+buff.words.length-1>maxWidth){
            let leave = buff.words.pop()
            // console.log(maxWidth,buff.strlen,leave.length);
            let allKongXi = maxWidth-(buff.strlen-leave.length)
            let strMax = ""
            for(let i=0;i<buff.words.length;i++){
                strMax+=buff.words[i]
                // console.log('!',allKongXi,(buff.words.length-1-i),buff.words);
                let kongxi = 0
                if(buff.words.length-1-i===0 && allKongXi>=0){
                    kongxi = allKongXi
                }else{
                    kongxi = Math.ceil(allKongXi/(buff.words.length-1-i))
                }
                allKongXi-=kongxi
                // console.log(kongxi);
                while(kongxi--) strMax+=' '
            }
            // console.log('#',strMax);
            res.push(strMax)
            // 注意要留下最后一个
            buff.words=[]
            buff.strlen=0
            index--
        }
        // console.log(index);
        // 已经插入最后一个了则不用重新插入,需要处理好最后一行
        if(index===words.length){
            buff.words
            let strMax = ""
            for(let i=0;i<buff.words.length;i++){
                strMax+=buff.words[i]
                if(i<buff.words.length-1)strMax+=' '
            }
            let kongge = maxWidth-strMax.length
            while(kongge--)strMax+=' '
            res.push(strMax)
        }else{
            buff.words.push(words[index])
            buff.strlen+=words[index].length
        }
        index++
    }
    return res
};

// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."],16));
// console.log(fullJustify(["What","must","be","acknowledgment","shall","be"],16));
console.log(fullJustify(["enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20));