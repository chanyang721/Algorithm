function solution(s) {
    // 순서있는 열거, 순서를 따르는 요소의 모음을 튜플이라 한다.
    // 중복 요소 가능
    // 순서가 다르면 다른 튜플이다.
    // 중복된 요소가 없는 튜플이 주어진다.
    // 많이 나온 순서대로 앞으로 정렬
    let base = s.replace(/{/gi, "").replace(/}/gi, "").replace(/,/gi, " ").split(" ");
    let database = [];

    for (let i = 0; i < base.length; i++) {
        if(database[Number(base[i])] === undefined) database[Number(base[i])] = { num: Number(base[i]), count: 1};
        else database[Number(base[i])].count++;
    }

    let result = database
            .filter(el => el !== undefined)
            .sort((a, b) => b.count - a.count)
            .map(el => el = el.num)

    return result;
}