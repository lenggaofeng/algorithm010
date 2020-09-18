export type Case<I, O> = {
    input: I, 
    output: O,
}

export type Comp<I> = (a: I, b: I) => boolean;

export function CompBase<T>(a:T, b:T) {
    return a === b;
}

export function getCompArr<T>(comp:Comp<T>, sort?:(arr:T[])=>void) {
    return (a: T[], b: T[]) => {
        if (a.length != b.length) { return false; }
        if (sort) {
            sort(a);
            sort(b);
        }
        return a.every((v, i) => {
            return comp(b[i], v);
        });
    }
}

export function testWithResult<I, O>(cases: Case<I, O>[], func: (input: I) => O, comp:Comp<O>) {
    const flag = cases.every((v, i) => {
        const result = func(v.input);
        const flag = comp(result, v.output);
        if (!flag) {
            console.log(`case failed: ${i}/${cases.length}`, v, "result:", result);
        }
        return flag;
    });
    if (flag) {
        console.log("all cases passed");
    }
    return flag;
}

export function testWithCheck<I, O>(cases: I[], func: (input: I) => O, check:(output:O)=>boolean) {
    const flag = cases.every((v, i) => {
        const result = func(v);
        const flag = check(result);
        if (!flag) {
            console.log(`case failed: ${i}/${cases.length}`, v, "result:", result);
        }
        return flag;
    });
    if (flag) {
        console.log("all cases passed");
    }
    return flag;
}