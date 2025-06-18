function solution(price) {
    // 100000 -> 5%
    // 300000 -> 10%
    // 500000 -> 20%
    // if price >= 500000 answer = price * 0.8
    // else if 300000 
    var answer = price;
    if (price >= 500000) answer = price * 0.8;
    else if (price >= 300000) answer = price * 0.9;
    else if (price >= 100000) answer = price * 0.95;
    return Math.floor(answer);
}