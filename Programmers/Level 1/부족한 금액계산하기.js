function solution(price, money, count) {

    let baseArr = new Array(count).fill(price);

    const result = baseArr
         .map((el, idx) => el = el * (idx + 1))
         .reduce((acc, cur) => acc + cur)

    return result - money;
}