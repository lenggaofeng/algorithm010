// function isNumber(s: string): boolean {
//     return !isNaN(+s);  
// };

function isNumber3(s: string):boolean {
    return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/.test(s.trim());
}

function isNumber(s: string): boolean {
    s = s.trim().toLowerCase();
    const parts = s.split("e");
    if(parts.length > 2){
        return false;
    }

    const [first, second] = parts;
    if (!first || s.indexOf("e") !== -1 && !second) {
        return false;
    }

    const bases = first.split(".");
    if (bases.length > 2) {
        return false
    }
    const [zheng, xiao] = bases;
    if(!zheng && !xiao){return false;}

    let flag = true;
    if (zheng) {
        flag = !!zheng.match(/^[+-]?[0-9]*$/);
        if(!xiao && (zheng == "+" || zheng == "-")){
            return false;
        }
    }

    if (xiao && flag) {
        flag = !!xiao.match(/^[0-9]*$/);
    }

    if (second && flag) {
        flag = !!second.match(/^-?[0-9]+$/)
        if(second == "+" || second == "-"){
            return false;
        }
    }
    return flag;
};

const flag = ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123", ".1", "1."].map(v => isNumber(v))
    .concat( ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"].map(v => !isNumber(v))
    );
console.log(flag);
