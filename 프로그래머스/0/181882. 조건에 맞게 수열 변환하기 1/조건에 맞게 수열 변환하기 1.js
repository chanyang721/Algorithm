function solution(arr) {
    // for i=0 i -> len i++
    // arr[i] >= 50 && !(arr[i] % 2) ? arr[i] / 2
    // arr[i] < 50 && (arr[i] % 2) ? arr[i] * 2
    for (let i = 0; i < arr.length; i++){
        const num = arr[i]
        if (num >= 50 && !(arr[i] % 2)) {
            arr[i] = arr[i] / 2
        }
        else if (num < 50 && (arr[i] % 2)) {
            arr[i] = arr[i] * 2
        } 
    }
    var answer = arr;
    return answer;
}