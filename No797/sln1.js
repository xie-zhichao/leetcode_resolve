/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var paths=[];
    fun2(graph, 0, [], paths);
    return paths;
};

var fun2 = function(graph, n, path, paths) {
    if(n===graph.length-1){
        path.push(n);
        paths.push(path);
        return;
    } 
    var nn = graph[n];
    for(let i=0; i<nn.length; i++){
        //console.log(nn[i]);
        var path_ = path.slice(0);
        path_.push(n);
        fun2(graph, nn[i], path_, paths);
    }
}

//paths做全局变量时，有问题（本地没wenti）。貌似是和测试代码有冲突。