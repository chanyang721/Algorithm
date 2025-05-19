function solution(arr, queries) {
    // queries [s,e,k] -> q.len
    // for s => e
    //      i % k === 0 ? arr[i] = arr[i]+1
    for ([s,e,k] of queries) {
        for (let i = s; i <= e; i++) {
            if (i % k === 0) arr[i] = arr[i]+1
        }
    }
    return arr;
}