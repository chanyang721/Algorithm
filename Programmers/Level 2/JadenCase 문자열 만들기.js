function solution(s) {
    // 모든 단어의 첫 문자가 대문자, 그 외는 소문자인 문자열로 리턴
    // s는 길이가 1이상, 알파벳과 공백문자로 이루어짐
    let result = s[0].toUpperCase();

    for (let i = 1; i < s.length; i++) {
        if(s[i - 1] === " ") result += s[i].toUpperCase();
        else result += s[i].toLowerCase();
    }
    
    return result;
}