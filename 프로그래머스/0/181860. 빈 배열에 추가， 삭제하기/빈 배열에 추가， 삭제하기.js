function solution(arr, flag) {
    // X = [], arr.len === flag.len
    // for i = 0 -> flag.len
    //      if (flag[i]) for j = 0 -> arr[i] X.push(arr[i])
    //      else if (!flag[i]) X = X.slice(0, X.len - arr[i])
    let X = []
    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            X = X.concat(new Array(arr[i] * 2).fill(arr[i]))
        }
        else if (!flag[i]) {
            X = X.slice(0, X.length - arr[i])
        }
    }
    return X;
}