function solution(cipher, code) {
    // cipher -> code의 배수의 글자 -> 암호
    // for cipher i = code-1 -> len i += code
    //      answer += cipher[i]
    var answer = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i]
    }
    
    return answer;
}