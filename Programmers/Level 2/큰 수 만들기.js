// 해결 못함 // 
function solution(number, k) {
    // number에서 k수를 제거한 수 중 가장 큰 수를 리턴
    // 앞에 세 수를 비교해서 가장 작은 수를 제거한다.
    // 만약 같은 수가 있다면 가장 앞의 수를 answer에 넣는다.
    // k번 반복한다.
    // 결과를 answer의 뒤에 붙인다
    let answer = ''
    number = number.split("").map(el => el = Number(el));
    
    while(k > 0) {
    let f = number[0], s = number[1], t = number[2];
        if (f <= s && f <= t) {
            number.splice(0, 1);
        }
        else if (s <= f && s <= t) {
            number.splice(1, 1);
        }
        else if (t <= f && t <= s) {
            number.splice(2, 1);
        }
        else {
            answer += number[0];
            number.unshift();
        }
        k--;
    }
    
    return answer + number.join("")
}

// 구글 해결 방법 // 
function solution(number, k) {
    let answer = '';
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        let el = number[i];
        while(k > 0 && stack[stack.length-1] < el) {
            stack.pop();
            k--;
        }
        
        stack.push(el);
    }
    
    stack.splice(stack.length - k, k);
    return stack.join("");
}