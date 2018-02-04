/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ln1 = getNumByListNode(l1); 
    var ln2 = getNumByListNode(l2);

    return addNumArr(ln1, ln2);
};

function getNumByListNode(l) {
    var numArr = [];
    var li = l;
    while(li){
        numArr.push(li.val);
        li = li.next;
    }
    return numArr;
}

function addNumArr(ln1, ln2) {
    var len1=ln1.length, len2=ln2.length, ln_=[];
    
    var i=0;sum=0,indent=0,lenMax = len1>len2?len1:len2;
    while(true){
        sum = (i<len1 ? ln1[i]:0) + (i<len2 ? ln2[i]:0) + indent;
        if(sum>9){
            indent = 1;
            sum %= 10;
        }else{
            indent = 0;
        }
        if(indent===0&&sum===0&&i>=lenMax){
            break;
        } 
        ln_.push(sum);
        i++;
    }
    ln_.reverse();
    var len = ln_.length;
    var li = null, liLast = null;
    for(var i=0; i<len; i++){
        liLast = li;
        li = new ListNode(ln_[i]);
        li.next = liLast;
    }
    return li;
}