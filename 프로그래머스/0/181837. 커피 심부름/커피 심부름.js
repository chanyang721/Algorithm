function solution(order) {
    // cafelatte: 5000, americano = anything: 4500
    // listMap ()
    // for i 0 -> order.len
    //      if order[i].includes('cafelatte') answer += 
    //      else 
    var answer = 0;
    const items = {
        cafelatte: 5000, 
        americano: 4500,
        anything: 4500
    }
    for (let i = 0; i < order.length; i++) {
        if (order[i].includes('cafelatte')) {
            answer += items['cafelatte']
        } else {
            answer += items['americano']
        }
    }
    
    return answer;
}