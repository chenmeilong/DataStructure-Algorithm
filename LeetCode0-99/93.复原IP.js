var restoreIpAddresses = function(s) {
    let res =[]
    let len = s.length
    const dfs = (index,ip)=>{
        if(ip.length>4) return null
        if(index>=len && ip.length===4){
            res.push(ip.join('.'))
            return null
        }
        let ipNum = ''
        for(let i=index; i<index+3 && i<len; i++){
            ipNum += s[i]
            // 剔除大于10且高位为0的情况
            if(ipNum[0]==='0' && ipNum.length>1) break
            if(+ipNum<256){
                ip.push(ipNum)
                dfs(i+1,ip)
                ip.pop()
            }
        }
    }
    dfs(0,[])
    return res
};

console.log(restoreIpAddresses("101023"));