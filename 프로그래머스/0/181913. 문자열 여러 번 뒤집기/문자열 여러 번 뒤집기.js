function solution(my_string, queries) {
    const chars = my_string.split("")
    for ([s, e] of queries) {
        const strs = chars.slice(s, e+1).reverse()
        chars.splice(s, e-s+1, ...strs)
    }
    return chars.join("");
}