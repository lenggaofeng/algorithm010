/**
 * https://leetcode-cn.com/problems/house-robber-iii/
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 /**
  * 
  * dp[i][0] 为偷根节点
  * dp[i][1] 为不偷根节点
  * 
  * 
  * dp[i][0] = dp[left][1] + dp[right][1] + val[i];
  * dp[i][1] = Math.max(dp[left][0], dp[left][1]) + Math.max(dp[right][0], dp[right][1])
  * 
  */

function rob(root:TreeNode){
    function dfs(node:TreeNode):number[]{
        let value0 = node.val;
        let value1 = 0;
        if(node.left){
            let [left0, left1] = dfs(node.left);
            value0 += left1;
            value1 += Math.max(left0, left1);
        }
        if(node.right){
            let [right0, right1] = dfs(node.right);
            value0 += right1;
            value1 += Math.max(right0, right1);
        }
        return [value0, value1];
    }

    return Math.max(...dfs(root));
}
