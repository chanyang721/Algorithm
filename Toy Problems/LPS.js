const LPS = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력 => alpha소문자 문자열str
    // 출력 => 조건을 만족하는 LPS*를 찾아 길이를 리턴
    //     조건 1. LPS란 ? => 입력된 str의 가장 긴 접두어이자 접미어
    //     조건 2. non-overlapping => 접두어와 접미어는 서로 겹치는 부분이 없어야 한다.
    //// 수도 코드 //// 
    // 접두어 & 접미어 중 긴것의 길이를 리턴
    // 접두어는 모두 같은 문자로 이루어져있다고 가정한다 ?
    // 다른 문자가 나타나는 순간 접두어의 길이가 결정된다.
    // 접두어의 길이가 str의 길이의 절반보다 크다면, 접미어와 겹치기 때문에 문자열길이의 절반을 리턴한다.
    // 그게 아니라면, 접두어의 길이를 리턴한다.
    // 접두사를 담을 배열을 선언하고, str의 0번째 인덱스값을 넣는다. pre = [str[0]]
    // let lastIdxOfPre = 1;
    // let L = str.length;
    // while => pre[lastIdxOfPre] === str[0]의 첫인덱스값이 아니면 탈출
    //   pre배열의 마지막 인덱스값과 str의 0번째 인덱스값이 같기 때문에
    //   pre 배열의 마지막에 str의 0번째 인덱스 값을 push 한다.
    //   let head = str[0]
    //   let tail = str.slice(1)
    //   pre.push(head)
    //   str = tail
    //   lastIdxOfPre++
    //
    // let result = pre.length 
    // return result > L / 2 ? Math.floor(L / 2) : result;
    //// 풀이 //// 
    let pre = [str[0]];
    let lastIdxOfPre = 0;
    let L = str.length;
    str = str.slice(1);

    while (pre[lastIdxOfPre] === str[0]) {
        let head = str[0];
        let tail = str.slice(1)

        pre.push(head);
        str = tail;
        lastIdxOfPre++
    }
    let result = pre.length;
    return result > L / 2 ? Math.floor(L / 2) : result;
};