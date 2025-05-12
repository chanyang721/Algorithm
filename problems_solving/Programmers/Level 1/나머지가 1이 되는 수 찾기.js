function solution(n) {
    // 자연수 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 리턴
    let result = 0; 
    for (let i = 1; i < n; i++) {
        if (n % i === 1) {
            result = i;
            break;
        }
    }
    return result;
}