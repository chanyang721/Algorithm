function solution(strArr) {
    var answer = [];
    strArr.forEach((el, i) => {
        if (!(i % 2)) answer.push(el.toLowerCase());
        else if (i % 2) answer.push(el.toUpperCase());
    });
    return answer;
}