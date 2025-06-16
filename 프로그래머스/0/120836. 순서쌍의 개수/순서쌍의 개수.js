function solution(n) {
    // 약수 쌍의 갯수 
    // for i 1 -> i * i <= sqrt n; i++
    //      if (n % i === 0)
    var answer = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i*i === n) {
                answer++
            } else {
                answer += 2
            }    
        }
        
    }
    
    return answer;
}