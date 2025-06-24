function solution(sides) {
    // max len < others
    // a + b > c
    // max(a, b) > c
    // 1. 나머지가 가장 큰 변
    // c => a + b - 1, max(a, b) - 1
    // c = a + b - 1 - (max(a, b) - 1) + 1
    //     == a + b - max(a, b) + 1
    
    // 2. 주어진 것이 가장 큰 변
    // c + min(a, b) > max(a, b)
    // max (a, b) >= c > max(a, b) - min(a, b)
    // c = max(a, b) - (max(a, b) - min(a, b))
    //   == min(a, b)

    // c = a + b - max(a, b) + 1 + min(a, b)
    const [a, b] = sides;
    var answer = a + b - Math.max(a, b) + Math.min(a, b) - 1;
    return answer;
}