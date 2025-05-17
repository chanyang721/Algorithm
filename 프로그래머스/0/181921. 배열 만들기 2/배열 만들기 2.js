function solution(l, r) {
    var answer = [];
    
    function* generator() {
        let i = 0
        while(true) {
            yield +(i.toString(2)) * 5;
            i++
        }
    }
    
    const gen = generator();
    let num = 0;
    
    while(num < l) {
        num = gen.next().value
    }
    while(num <= r) {
        answer.push(num)
        num = gen.next().value
    }
    
    
    return answer.length === 0 ? [-1] : answer;
}