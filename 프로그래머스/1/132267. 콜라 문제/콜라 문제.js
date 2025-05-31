function solution(a, b, n) {
    // 빈병 a개 -> 콜라 b개
    // 빈병 n개 -> 콜라 ?개 => 재귀 or 반복문
    // 남는거: remain = n % a
    // 새로 받을거: new = Math.floor(n / a) * b
    // 받은거: answer += new + solution(a, b, new+remain)
    if (n < a) return 0;
    
    const remain = n % a;
    const newCoke = Math.floor(n / a) * b;
    
    return newCoke + solution(a, b, newCoke + remain);
}