function solution(strArr) {
    // if strArr.map( el => el.includes("ad") ? push(el)
    var answer = [];
    strArr.map(str => {
        if (!str.includes("ad")) {
            answer.push(str)
        }
    })
    
    return answer;
}