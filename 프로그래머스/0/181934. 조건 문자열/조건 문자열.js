function solution(ineq, eq, n, m) {
    const map = {
        "<=": (a, b) => a <= b,
        ">=": (a, b) => a >= b,
        ">!": (a, b) => a > b,
        "<!": (a, b) => a < b
    }
    let answer = map[ineq + eq](n, m) ? 1 : 0
    return answer;
}