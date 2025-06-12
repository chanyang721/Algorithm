function solution(quiz) {
    // 연산자 map
    // for [ x, o, y, e, z ] of q.map(el => el.split(" "))
    //   let result = ""
    //   o == + ? (x, y) => x + y
    var answer = [];
    const operators = {
        "+": (x, y) => +x + +y,
        "-": (x, y) => +x - +y,
        "*": (x, y) => +x * +y,
        "": (x, y) => +x + +y,
    }
    for (let [ x, o, y, e, z ] of quiz.map(el => el.split(" "))) {
        let result = ''
        if (operators[o]) {
            result = operators[o](x, y) === +z ? "O" : "X"
            answer.push(result)
        }
    }
    
    
    return answer;
}