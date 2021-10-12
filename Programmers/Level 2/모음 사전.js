function solution(word) {
    // 사전에 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는 길이 5 이하의 모든 단어가 수록됨
    // word = 길이 5이하의 단어
    // 각 자리수마다 변경되기 위한 횟수가 정해져있다.
    // A---- AA--- AAA-- AAAA- 
    // AAAAA AAAAE AAAAI AAAAO AAAAU AAAE- AAAEA AAAEE AAAEI AAAEO AAAEU AAAI-
    // "A" = 1
    // "E" = 781
    // "I" = 1563
    // 1자리를 1개 올리기 위해서는 5^0이 필요 1
    // 2자리를 1개 올리기 위해서는 5 * 1 + 1이 필요 6 
    // 3자리를 1개 올리기 위해서는 5 * 6 + 1이 필요 31 
    // 4자리를 1개 올리기 위해서는 5 * 31 + 1이 필요 156
    // 5자리를 1개 올리기 위해서는 5 * 156 + 1이 필요 781
    let count = 0;
    let base = [ 781, 156, 31, 6, 1 ];
    let alpha = { 'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4 };

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "A") count += 1;
        else count += alpha[word[i]] * base[i] + 1;
    }
    
    return count;
}