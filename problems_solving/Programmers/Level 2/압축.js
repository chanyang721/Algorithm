function solution(msg) {
    // 대문자만 처리
    // 알파벳 대문자를 요소로 하는 객체을 선언한다.
    // idx = 26;
    // let dic = {}
    // const result = [];
    // w가 사전에 있고, w + c가 사전에 없을때 w의 숫자를 result에 넣고 w + c를 사전에 등록한다. 
    // 다음 w는 c이다. 
    // w는 대문자로 반드시 사전에 있기 떄문에 w + c가 사전에 등록되어있지 않을 때까지 msg를 한글자씩 더한다.
    let idx = 27;
    let dic = {};
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alpha.length; i++) {
        if (dic[alpha[i]] === undefined) dic[alpha[i]] = i + 1;
    }

    msg += "a";
    const result = [];
    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        
        for (let j = i + 1; j < msg.length; j++) {
            w += msg[j];

            if (dic[w]) continue;
            else {
                result.push(dic[w.slice(0, -1)]);
                dic[w] = idx;
                idx++;
                i = j - 1;
                break;
            }
        }

    }
    
    return result;
}