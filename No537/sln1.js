/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var cna = toComplexNumber(a);
    var cnb = toComplexNumber(b);
    var c = cna.n*cnb.n + cna.c*cnb.c*-1;
    var n = cna.n*cnb.c + cna.c*cnb.n;
    return c+'+'+n+'i';
};

var ComplexNumber = function(n, c){
    this.n = n;
    this.c = c;
    //console.log(n+","+c);
}

var toComplexNumber = function(s){
    var parts = s.split('+');
    //console.log(parts);
    var len = parts.length;
    var i=0;
    var n='';
    while(i<len-1){
        n += parts[i++];
    }
    //console.log(n);
    return new ComplexNumber(new Number(n), new Number(parts[len-1].slice(0, -1)));
}