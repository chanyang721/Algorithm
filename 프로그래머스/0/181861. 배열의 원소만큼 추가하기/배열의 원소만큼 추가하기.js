function solution(arr) {
    // X = [] arr = [+]
    // arr i = 0 -> len
    //      if arr[i] === a ? j = 0 -> arr[i], X.push(arr[i])
    let X = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            X.push(arr[i])
        }
    }
    return X;
}