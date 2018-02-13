/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var flag = x>0 ? 1:-1;
    var x_ = Math.abs(x).toString();
    var len = x_.length,i=len-1;
    var x_r = '';
    while(i>=0){
        x_r += x_.charAt(i);
        i--;
    }
    var xr = parseInt(x_r)*flag;
    if(xr > 2147483648 || xr < -2147483648){
        return 0;
    } else {
        return xr;
    }
};