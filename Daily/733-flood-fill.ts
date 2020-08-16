function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let color = image[sr][sc];
    if(color == newColor){return image;}

    let m = image.length;
    if(m == 0){return;}
    let n = image[0].length;
    if(n == 0){return;}

    function dfs(i:number, j:number, color:number, newColor:number){
        if(i >= m || j >= n || i < 0 || j < 0){return;}
        if(image[i][j] !== color){
            return;
        }

        image[i][j] = newColor;
        dfs(i, j + 1, color, newColor);
        dfs(i, j - 1, color, newColor);
        dfs(i + 1, j, color, newColor);
        dfs(i - 1, j, color, newColor);
    }

    dfs(sr, sc, color, newColor);
    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));