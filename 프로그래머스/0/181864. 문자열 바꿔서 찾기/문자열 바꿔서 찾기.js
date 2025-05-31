function solution(myString, pat) {
    // map(el => { if el === "A" ? el = "B" : el  = "A" }).includes(pat) ? 1 : 0
    var answer = myString
        .split("")
        .map(el => el === "A" ? el = "B" : el = "A")
        .join("")
        .includes(pat) 
            ? 1 
            : 0
    return answer;
}