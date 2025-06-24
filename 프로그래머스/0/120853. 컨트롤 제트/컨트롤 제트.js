function solution(s) {
    // Z -> 앞 숫자 제거
    // s.split(" ").map((el, idx) => el === "Z" ? s[idx-1] = "" && el = "": el).reduce((a,c) => a+c)
    const stack = [];
    var arr = s.split(" ")
    var answer = 0;
    
    for (let el of arr) {
        if (el === "Z") {
            stack.pop()
        } else {
            stack.push(+el)
        }
    }
    answer = stack.reduce((a,c) => a+c, 0)
    
    return answer
}