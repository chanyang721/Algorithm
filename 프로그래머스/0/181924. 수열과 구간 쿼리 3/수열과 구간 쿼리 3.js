function solution(arr, queries) {
    var answer = [];
    // for (let k = 0; k < queries.length; k++) {
    //     const [i, j]= queries[k];
    //     const I = arr[i];
    //     const J = arr[j];
    //     arr[i] = J;
    //     arr[j] = I;
    // }
    const swap = ([i, j]) => {
        [[arr[i], arr[j]]] = [[arr[j], arr[i]]]
    }
    
    for(let k of queries) swap(k);
    
    return arr;
}