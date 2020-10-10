function connect(root: TreeNode | null): TreeNode | null {
    if(!root){return null;}
    const queue = [root];
    while(queue.length){
        const n = queue.length;
        let pre:TreeNode;
        for(let i = 0; i < n; i++){
            let node = queue.pop();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            if(pre){
                pre.next = node;
            }
            pre = node;
        }
    }
};

function connectWithNext(root: TreeNode | null): TreeNode | null {
    if(!root){return null;}

    let first = root;
    while(first){
        let node = first;
        first = null;
        let pre : TreeNode | null;
        while(node){
            if(node.left){
                if(pre){
                    pre.next = node.left
                }
                if(!first){
                    first = node.left;
                }
                pre = node.left;
            }
            if(node.right){
                if(pre){
                    pre.next = node.right
                }
                if(!first){
                    first = node.right;
                }
                pre = node.right;
            }
            node = node.next;
        }
    }

    return root;
}