function solution(str_list) {
    // str_list include "u", "d", "l", "r" 
    // "l"과 "r" 중 "l" 먼저 ? "l" 기준 왼쪽 문자열 리스트
    //             "r" 먼저 ? "r" 기준 오른쪽 문자열 리스트
    // 둘 다 없으면 return [];
    var answer = [];
    
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "r") {
            answer.push(...str_list.slice(i+1))
            break;
        }
        else if (str_list[i] === "l") {
            answer.push(...str_list.slice(0, i))
            break;
        }
    }
    
    return answer;
}