function solution(a, b, c, d) {
    // 1 ~ 6 주사위 4개
    // 4 p ? result += 1111 * p
    // 3 p, 1 q ? result += (10*p+q)**2
    // 2 p, 1 q, 1 r ? result = p*q
    // 2 p, 2 q, 1 r ? result = (p + q) × |p - q|
    // 1p,1q,1r,1s ? result += result += Math.min(...values);
    // 중복이 뭔지 알아야함 => map?
    var answer = 0;
    const arr = [a,b,c,d]
    const conuts = new Map()
    arr.forEach(num => {
      conuts.set(num, (conuts.get(num) || 0) + 1);
    });
    
    const sorted = [...conuts.entries()]
        .sort((a,b)=>b[1]-a[1])
    
    if (sorted.length === 1) {
        const [p] = sorted[0];
        answer = 1111 * p;
    } else if (sorted.length === 2) {
        
        const [p, pCount] = sorted[0];
        const [q] = sorted[1];

        if (pCount === 3) answer = (10 * p + q) ** 2;
        else answer = (p + q) * Math.abs(p - q);
        
    } else if (sorted.length === 3) {
        // 2개 + 1개 + 1개
        const [p] = sorted[0];
        const [q] = sorted[1];
        const [r] = sorted[2];

        answer = q * r;
    } else if (sorted.length === 4) {
            // 모두 다른 숫자
            answer = Math.min(...sorted.map(([key]) => key));
    }
    
    
    return answer;
}