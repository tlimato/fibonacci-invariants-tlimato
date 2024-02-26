function fib(n) {
    let fibArray = [];
    
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            // Base case for input = 0
            fibArray.push(0);
        } else if (i === 1) {
            // Base Case for input = 1
            fibArray.push(1);
        } else {
            // push result onto array (list)
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
    }
    // return the final result
    return fibArray;
}


//[Running] node "/home/tyson/Documents/Cosc3020/fibonacci-invariants-tlimato/code.test.js"

// [Done] exited with code=0 in 0.041 seconds
