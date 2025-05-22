function solution(my_string) {
    // 0번 인덱스를 제외한 모든 문자열을 사전순으로 정렬
    // 1. 접미사 배열 생성
    //   1-1. for i = 1 -> len
    //       push(str.slice(i))
    // 2. 사전순 정렬 sort()
    var answer = [];
    const strs = my_string.split("")
    for (let i = 0; i < my_string.length; i++) {
        answer.push(strs.slice(i).join(""))
    }
    return answer.sort();
}