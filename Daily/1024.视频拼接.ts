/*
 * @lc app=leetcode.cn id=1024 lang=typescript
 *
 * [1024] 视频拼接
 */

import { CaseArr, testWithResult } from "./Test";

// @lc code=start
function videoStitching(clips: number[][], T: number): number {
    clips.sort((a,b)=>{
        return a[0] - b[0] || b[1] - a[1];
    });
    if(clips[0][0] > 0){return -1;}
    
    let max = 0;
    const stack = new Array<number[]>();
    for(let i = 0; i < clips.length; i++){
        const clip = clips[i];
        const [start, end] = clip;
        if(start > max){
            break;
        }

        if(end > max){
            for(let j = 0; j < stack.length; j++){
                if(stack[j][1] >= start){
                    stack.length = j + 1;
                    break;
                }                
            }

            while(stack.length){
                if(stack[stack.length - 1][0] >= start){
                    stack.pop();
                } else {
                    break;
                }
            }
            stack.push(clip);
            max = end;
            if(max >= T){
                break;
            }
        }
    }

    if(max < T){return -1;}

    return stack.length;
};
// @lc code=end

const cases:CaseArr<[number[][], number], number> = [
    {input:[[[5,7],[1,8],[0,0],[2,3],[4,5],[0,6],[5,10],[7,10]], 5], output: 1},
    {input:[[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10], output: 3},
    {input:[[[0,1],[1,2]], 5], output: -1},
    {input:[[[0,4],[2,8]], 5], output: 2},
    {input:[[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9], output: 3},
]

testWithResult(cases, ([clips, T])=>videoStitching(clips, T));