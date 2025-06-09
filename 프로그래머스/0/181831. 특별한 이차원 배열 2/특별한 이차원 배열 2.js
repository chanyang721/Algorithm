function solution(arr) {
    // arr = n*n [[]]
    // for i 0 -> len
    //      for j 0 -> len
    //          if (arr[i][j] !== arr[j][i]) answer = 1, break
    var answer = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) {
                answer = 0
                break;
            }
        }
    }
    return answer;
}