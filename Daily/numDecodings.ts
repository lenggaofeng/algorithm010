function numDecodings(s:string){
    if(s[0] == "0") {return 0;}
    let n = s.length;
    let pre = 1, cur = 1;
    for(let i = 1; i < n; i++){
        let c = +s[i];
        let preC = s[i - 1];
        if(c == 0){
            if(preC == "1" || preC == "2"){
                let tmp = pre;
                pre = cur;
                cur = tmp;
            } else {
                return 0;
            }
        } else if(preC == "1" || (preC == "2" && c >= 0 && c <= 6)){
            let tmp = pre + cur;
            pre = cur;
            cur = tmp;
        } else {
            pre = cur;
        }
    }
    return cur;
}

console.log(numDecodings("24726"))