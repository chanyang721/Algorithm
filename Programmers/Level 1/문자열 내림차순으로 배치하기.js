function solution(s) {
    // 대소문자로 이루어진 문자열 s의 letters를 큰것부터 작은 순서로 정렬한 새로운 문자열을 리턴
    // 대문자는 소문자보다 작다.
    // codePointAt() 으로 숫자로 변경 가능
    // 배열로 만든다. 
    // map => el => el = { letter: el, num: el.codePointAt() };
    // sort((a, b) => a - b);
    let result = s.split("")
        .map(el => el = { letter: el, num: el.charCodeAt(0) })
        .sort((a, b) => a.num > b.num ? -1 : 1)
        .map(el => el.letter)
        .join("")

    return result;
}

// 대소문자를 sort시 자동으로 아스칼 숫자로 정렬된다.
function solution(s) {
    // 대소문자로 이루어진 문자열 s의 letters를 큰것부터 작은 순서로 정렬한 새로운 문자열을 리턴

    let result = s.split("")
        .sort()
        .reverse()
        .join("")

    return result;
}