// 콜스택 제한으로인한 런타임 에러
function solution(n) {
    // 탈출 조건 
    // n번째 피보나치수 % 1234567 를 리턴
    // memo[n] !== undefined; return memo[n] % 1234567;
    // 메모라이즈로 저장하여 한번만 계산한다. 
    // base //
    const memo = [0, 1];
    // recursive //
    const recursive = (n) => {
        if (memo[n] !== undefined) return memo[n];
        memo[n] = (recursive(n - 1) % 1234567 + recursive(n - 2) % 1234567) % 1234567;
        return memo[n];
    }
    
    return recursive(n);
}


// 반복문 풀이
function solution(n) {
    let base = [ 0, 1 ];
    if (base[n] !== undefined) return base[n]
    for (let i = 2; i <= n; i++) {
        base[i] = (base[i - 1] % 1234567 + base[i - 2] % 1234567) % 1234567;
    }
    return base[n];
}