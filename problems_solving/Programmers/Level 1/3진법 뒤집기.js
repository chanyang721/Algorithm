function solution(n) {
    // 자연수 n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법 수로 리턴
    // n은 1 ~ 100,000,000인 자연수
    let base = n.toString(3).split("").reverse().join("")
    let result = Number.parseInt(base, 3);
    
    return result;
}