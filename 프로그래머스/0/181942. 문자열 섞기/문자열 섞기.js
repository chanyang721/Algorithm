function solution(str1, str2) {
    var answer = '';
    str1.split("").forEach((e, idx) => answer += e + str2[idx])
    return answer;
}