function solution(array) {
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        const chars = array[i].toString().split("");
        chars.map(num => {
            if (+num === 7) answer++;
        })
    }
    return answer;
}