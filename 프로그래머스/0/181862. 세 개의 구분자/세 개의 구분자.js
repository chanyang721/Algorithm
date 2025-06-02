function solution(myStr) {
    // divider = a,b,c
    // [] ? return ["EMPTY"]
    // 1. 
    // var answer = []
    // const isEmpty = ["EMPTY"]
    // answer = myStr.split("a")
    //     .map(el => el.split("b")).flat()
    //     .map(el => el.split("c")).flat()
    //     .filter(el => el !== "")
    // return answer.length === 0 ? isEmpty : answer
    
    // 2. 정규식
     const result = myStr.split(/[abc]/).filter(str => str !== "");
    return result.length ? result : ["EMPTY"];
    
    
}