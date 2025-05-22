function solution(my_string, s, e) {
    var answer = '';
    const chsrs = my_string.split("")
    const strs = chsrs.slice(s, e+1).reverse()
    chsrs.splice(s, strs.length, ...strs)
    return chsrs.join("");
}