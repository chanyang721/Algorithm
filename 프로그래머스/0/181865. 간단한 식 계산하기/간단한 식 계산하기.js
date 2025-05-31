function solution(binomial) {
    // 1. let ops = new map("+": (a,b) => a + b)
    //  for op in ops 
    //     if binomial.includes(op)
    //          [a, b] = binomial.split(op).map(el => el.trim());
    //          answer = ops[op](a, b)
    var answer = 0;
    let ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b
    }
    for (const op in ops) {
        if (binomial.includes(op)) {
            const [a, b] = binomial.split(op).map(el => +el.trim());
            answer = ops[op](a, b)
            break;
        }
    }
    return answer;
}