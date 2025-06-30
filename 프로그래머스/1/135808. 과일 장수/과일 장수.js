function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let total = 0;

    for (let i = 0; i + m <= score.length; i += m) {
        total += score[i + m - 1] * m;
    }
    
    return total;
}