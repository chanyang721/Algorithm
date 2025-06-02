function solution(myStr) {
    // divider = a,b,c
    // [] ? return ["EMPTY"]
    var answer = []
    const isEmpty = ["EMPTY"]
    answer = myStr.split("a")
        .map(el => el.split("b")).flat()
        .map(el => el.split("c")).flat()
        .filter(el => el !== "")
    
    return answer.length === 0 ? isEmpty : answer
}