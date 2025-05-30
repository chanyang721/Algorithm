function solution(myString) {
    // a -> A, !A and all UpperCase => toLowerCase
    // 
    var answer = '';
    const strs = myString.split("")
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === "a") answer += "A";
        else if (strs[i] === strs[i].toUpperCase() && strs[i] !== "A") answer += strs[i].toLowerCase()
        else answer += strs[i]
    }
    return answer;
}