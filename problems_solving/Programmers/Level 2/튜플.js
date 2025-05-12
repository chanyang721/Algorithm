// O(n) // 26.34ms //
function solution(s) {
    let base = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'));
    
    base = base.sort((a, b) => a.length - b.length).flat();

    let result = [ ...new Set(base) ]
    
    return result;
}

// O(n^2) // 71.07ms //
function solution(s) {
    let base = s.replace(/{/g, "").replace(/}/g, "").replace(/,/gi, " ").split(" ");
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