// 풀이 1 // 
function solution(price, money, count) {

    let baseArr = new Array(count).fill(price);

    const result = baseArr
         .map((el, idx) => el = el * (idx + 1))
         .reduce((acc, cur) => acc + cur)

    return result > money ? result - money : 0;
}

// 풀이 2 // 
function solution(price, money, count) {
    
    let result = 0;
    for (let i = 1; i <= count; i++) {
        result = result + price * i;
    }
    
    return result > money ? result - money : 0;
}