function firstUniqChar(s: string): number {
    const counts = new Array(26).fill(0);

    const codeA = 'a'.charCodeAt(0);
    for(let i = 0, l = s.length; i< l; i++){
        const c =s[i].charCodeAt(0) - codeA;
        counts[c] ++;
    }

    for(let i = 0, l = s.length; i< l; i++){
        const c =s[i].charCodeAt(0) - codeA;
        if(counts[c] == 1){
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar("loveleetcode"))