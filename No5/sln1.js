/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = 0;
    s && (len=s.length);
    var palindrome='',palindromeMax='';
    for(var i=0; i<len; i++){
        palindrome = findPalindrome(s, len, i);
        //console.log(palindrome);
        if(palindrome.length > palindromeMax.length){
            palindromeMax = palindrome;
        }
    }
    return palindromeMax;
};

var findPalindrome = function(s, len, index) {
    var m,n,m1,n1;
    for(m = index-1,n=index+1; m>=0&&n<len; m--,n++){
        if(s.charAt(m) !== s.charAt(n)){
            break;
        }
    }
    for(m1 = index-1,n1=index; m1>=0&&n1<len; m1--,n1++){
        if(s.charAt(m1) !== s.charAt(n1)){
            break;
        }
    }
    if(n-m > n1-m1){
        return s.substring(m+1, n);
    }else{
        return s.substring(m1+1, n1);
    }
    
}

//console.log(longestPalindrome('abb'));