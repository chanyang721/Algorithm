function solution(s) {
    // 한개 이상의 단어로 구성된 문자열 s
    // 각 단어는 " "으로 구분되며 각 단어의 짝수번째 알파벳은 대문자
    // 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
    // 각 문자를 요소로하는 요소배열에 담아 push한다.
    // 각 요소배열에서 split("")한다. 
    // 짝수번째(홀수 인덱스) 값은 toUpperCase();
    // 홀수번째(짝수 인덱스) 값은 toLowerCase();
    // 변경뒤 각 요소배열을 Join("");
    // 변경된 문자열이 있는 요소들을 빈칸 하나를 남기고 join(" ");
    const sArr = s.split(" ").map(el => el.split(""))
    
    for (let word = 0; word < sArr.length; word++) {
        for (let idx = 0; idx < sArr[word].length; idx++) {
            if (idx % 2 === 0) sArr[word][idx] = sArr[word][idx].toUpperCase();
            else sArr[word][idx] = sArr[word][idx].toLowerCase();
        }
    }
    let result = sArr.map(el => el.join("")).join(" ")
    
    return result;
}