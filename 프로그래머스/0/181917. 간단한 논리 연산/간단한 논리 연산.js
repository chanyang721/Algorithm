function solution(x1, x2, x3, x4) {
    // ∨ = or
    // ∧ = and
    
    var answer = (x1 || x2) && (x3 || x4);
    return answer;
}