/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var len = S?S.length:0;
    var ret = 0;
    if(J&&J.length>0){
        for(var i=0; i<len; i++){
            if(J.indexOf(S.charAt(i))>-1) ret++;
        }
    }else return ret;
    return ret;
};