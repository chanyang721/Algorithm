function solution(arr1, arr2) {
    // 1len != 2len ? len > bigger
    // 1len == 2len ? 1sum,  2sum 비교, 큰쪽이 큼, 같으면 같음
    // arr2 > ? -1 : 1
    // arr1 == arr2 ? 0
    // let 1len = arr1.length. 2len = arr2.length;
    // let bigger = 0;
    // if (1len !== 2len) 
    var answer = 0;
    let len1 = arr1.length, len2 = arr2.length;
    
    if (len1 === len2) {
        let sum1 = arr1.reduce((a,c) => a+c)
        let sum2 = arr2.reduce((a,c) => a+c)
        if (sum1 === sum2) answer = 0
        else if (sum1 < sum2) answer = -1;
        else if (sum1 > sum2) answer = 1;
    }
    else if(len1 > len2) answer = 1;
    else if(len1 < len2) answer = -1;

    return answer
}