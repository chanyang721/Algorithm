function solution(a, d, included) {
    let answer = 0;
    let el = a;
    included.forEach((bool) => {
        if (bool) answer += el;
        el += d
    })
    
    return answer;
}