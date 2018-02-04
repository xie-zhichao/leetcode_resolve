/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var len = nums ? nums.length:0;
    if(len == 0){
        return null;
    }else{
        var maxIndex = findMaxNumIndex(nums);
        var numsLeft = maxIndex>0?nums.slice(0, maxIndex):[];
        var numsRight = maxIndex<len-1?nums.slice(maxIndex+1):[];
        var node = new TreeNode();
        node.val = nums[maxIndex];
        node.left = constructMaximumBinaryTree(numsLeft); 
        node.right = constructMaximumBinaryTree(numsRight);
        return node;
    }
};

var findMaxNumIndex = function(nums){
    var len = nums ? nums.length:0;
    var maxNum = null;
    var index = -1; 
    for(var i=0; i<len; i++){
        if(maxNum === null || maxNum < nums[i]){
            maxNum = nums[i];
            index = i;
        }
    }
    return index;
}