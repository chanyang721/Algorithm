function solution(s) {
    // 각 글자마다 앞의 같은 글자의 인덱스 ?
    // 없으면 -1
    // strs = s.split("")
    // for let i = 0 -> len i++
    //      answer.push(s.slice(0, i).indexOf(s[i]))
    var answer = [];
    const strs = s.split("")
    for (let i = 0; i < s.length; i++) {
        const idx = s.slice(0, i).lastIndexOf(s[i]);
        if (idx === -1)  answer.push(idx);
        else answer.push(i-idx);
    }
    return answer;
}