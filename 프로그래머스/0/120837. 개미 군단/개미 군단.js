function solution(hp) {
    // 장군 5
    // 병정 3
    // 일 1
    // HP 체력 = power 공격력
    // 최소한의 병력 ?
    // 장군 최대 -> 병정 최대 -> 일 최소
    // a, b, c
    // map = {a:5, b:3, c:1}
    // while (hp !== 0) if (hp >= 5) answer += hp / 5, hp = hp % 5
    const map = {a:5, b:3, c:1}
    var answer = 0;
    while (hp !== 0) {
        if (hp >= 5) {
            answer += Math.floor(hp / 5);
            hp = hp % 5
        } else if (hp >= 3) {
            answer += Math.floor(hp / 3);
            hp = hp % 3
        } else {
            answer += hp
            hp = 0
        } 
    }
    
    return answer;
}