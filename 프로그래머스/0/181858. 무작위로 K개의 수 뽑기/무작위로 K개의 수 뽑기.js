function solution(arr, k) {
    // return 서로 다른 k개의 수를 저장한 배열
    // 범위 내 무작위 수 1개 -> 배열 내 없으면 push
    // 무작위 수 -> arr[i]
    // const padding = new Array({length:k}).fill(-1).slice(0, a.length)
    // const uniqueNums = [...new Set(arr)]
    // answer  = a.concat(b)
    let uniqueNums = [...new Set(arr)]
    
    if (uniqueNums.length < k) {
        const padding = new Array(k)
                                .fill(-1)
                                .slice(0, k - uniqueNums.length)
        
        uniqueNums = uniqueNums.concat(padding);
    }
    else if (uniqueNums.length > k) {
        uniqueNums = uniqueNums.slice(0, k)
    }
    var answer = uniqueNums
    return answer;
}