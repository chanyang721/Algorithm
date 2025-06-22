function solution(n) {
    // 약수 >= 3 == 합성수
    // n 이하의 합성수의 개수
    // for i = 1 => n i++
    //      cnt = 0
    //      for j = 1 => sqrt i
    //          if (i % j === 0)
    //              if (j * j === i) cnt += 1 else += 2
    //          if cnt >= 3 answer += 1 break
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let cnt = 0
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (j * j === i) {
                    cnt += 1
                } else {
                    cnt += 2
                }
            }
            
            if (cnt >= 3) {
                answer += 1
                break;
            }
        }
    }
    return answer;
}