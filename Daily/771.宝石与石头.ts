import { CaseArr, testWithResult } from "./Test";

function numJewelsInStones(J: string, S: string): number {
    const JArr = J.split("").sort();
    const SArr = S.split("").sort();

    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < JArr.length && j < SArr.length) {
        const p = JArr[i];
        while (SArr[j] == p) {
            cnt++;
            j++;
        }

        if (SArr[j] > p) {
            i++;
        } else {
            j++;
        }
    }
    return cnt;
};

function numJewelsInStonesHash(J: string, S: string): number {
    const jewelSet = new Set<string>();
    for (let i = 0; i < J.length; i++){
        jewelSet.add(J[i]);
    }

    let cnt = 0;
    for (let i = 0; i < S.length; i++){
        if (jewelSet.has(S[i])) {
            cnt++;
        }
    }
    return cnt;
}

const cases: CaseArr<[string, string], number> = [
    {input: ["aA", "aAAbbbb"], output: 3},
    {input: ["z", "ZZ"], output: 0},
    {input: ["z", ""], output: 0},
]

testWithResult(cases, ([J, S])=>numJewelsInStones(J, S));