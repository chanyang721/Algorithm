function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(intStr => {
        const int = +intStr.slice(s, s+l)
        const isIntBiggerThanK = int > k
        if (isIntBiggerThanK) {
             answer.push(int)
        }
    })
    return answer;
}