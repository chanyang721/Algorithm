function solution(score) {
    // 평균 -> 등수 -> 
    // [영, 수] = score
    // avg = score.map([a, b] => (a + b) / 2)
    // sorted = .sort((a, b) => b - a)
    // ranking = avg.map el => sorted.indexOf(el) + 1
    const avg = score.map(([a, b]) => (a + b) / 2);
    const sorted = [...avg].sort((a, b) => b - a);
    const rank = avg.map(v => sorted.indexOf(v) + 1);

    return rank;
}