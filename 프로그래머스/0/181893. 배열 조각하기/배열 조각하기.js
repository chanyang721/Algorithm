function solution(arr, query) {
    // for query i = 0 -> len
    // i % 2 === 0 ? arr = arr.slice(0, query[i]+1) => 뒷부분 제거
    // i % 2 === 1 ? arr = arr.slice(query[i]) => 앞부분 제거
    var answer = [];
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) arr = arr.slice(0, query[i]+1)
        else if (i % 2 !== 0) arr = arr.slice(query[i])
    }
    answer = arr
    return answer;
}