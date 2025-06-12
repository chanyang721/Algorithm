function solution(my_string) {
    // operators = {} +, -
    // [ x, o, y ] = my_string.split(" ")
    const tokens = my_string.split(" ")
    const ops = {
        "+": (x, y) => +x + +y,
        "-": (x, y) => +x - +y
    }
    let answer = +tokens[0]
    for (let i = 1; i < tokens.length; i+=2) {
        let o = tokens[i]
        let next = tokens[i+1]
        
        answer = ops[o](answer, next)
    }
    
    return answer;
}