/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var len = S?S.length:0;
    var char1, char2;
    var i,j;
    var repeat=0;
    var partitions = [0];
    var partitionsLen = 0;
    var results=[];
    for(i=0; i<len; i++){
        char1 = S.charAt(i);
        repeat = i;
        if(i > partitions[partitionsLen]){
            partitionsLen++;
            partitions[partitionsLen] = i;
        }
        
        for(j=i+1; j<len; j++){
            char2 = S.charAt(j);
            char1 === char2 && (repeat=j);
        }
        repeat > partitions[partitionsLen] && (partitions[partitionsLen] = repeat);
        //console.log(i + "#" + repeat);
    }
    var len1 = partitions.length;
    for(i=0; i<len1; i++){
        if(i===0){
            results.push(partitions[i]-0+1);
        } else {
            results.push(partitions[i]-partitions[i-1]);
        }

        if(i===len1-1){
            if(partitions[i]<len1-1){
                results.push(len1-partitions[i]);
            }
        }
    }
    //console.log("partitions:" + partitions);
    return results;
};