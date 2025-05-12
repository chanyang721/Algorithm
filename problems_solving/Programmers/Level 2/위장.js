function solution(clothes) {
    // 서로 다른 조합의 수를 리턴
    // [의상의 이름, 의상의 종류]
    // 하루에 최소 한 개의 의상은 입습니다.
    let base = {};
    for (let i = 0; i < clothes.length; i++) {
        if (!base[clothes[i][1]]) base[clothes[i][1]] = 2;
        else base[clothes[i][1]]++;
    }
    
    // 각 요소는 옷의 종류별 갯수를 뜻한다.
    // 안입은 경우를 포함한 경우의 수를 포함한 숫자이기 때문에 요소를 모두 곱하면 모든 경우의 수가 나온다.
    let count = 1;
    for(let clothes in base) { count *= base[clothes] };
    
    // 아무것도 안입은 경우의 수인 1을 제거
    return count - 1;
}