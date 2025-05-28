function solution(arr, queries) {
    // for i = 0; i < queries.length; i++
    //      [s,e] = queries[i]
    //      for (let j = s; j <= e; j++)
    //          arr[j]++
    for (let i = 0; i < queries.length; i++) {
        const [ s, e ] = queries[i]
        for (let j = s; j <= e; j++) {
            arr[j]++
        }
    }
    var answer = arr;
    return answer;
}