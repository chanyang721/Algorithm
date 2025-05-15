function solution(num_list) {
    var answer = 0;
    let even = "";
    let odd = "";
    num_list.forEach((el, i) => {
        if (el % 2 === 1) odd += el
        else if (el % 2 === 0) even += el;
    })
    answer = +even + +odd
    return answer;
}