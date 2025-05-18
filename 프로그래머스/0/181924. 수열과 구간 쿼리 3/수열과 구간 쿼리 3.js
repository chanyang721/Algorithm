function solution(arr, queries) {
    var answer = [];
    for (let k = 0; k < queries.length; k++) {
        const [i, j]= queries[k];
        const I = arr[i];
        const J = arr[j];
        arr[i] = J;
        arr[j] = I;
    }
    return arr;
}