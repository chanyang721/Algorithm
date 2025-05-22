function solution(my_string, queries) {
    for (let i = 0; i <= queries.length-1; i++) {
        const [s, e] = queries[i];
        const front = my_string.split("").slice(0, s)
        const strs = my_string.split("").slice(s, e+1).reverse()
        const back = my_string.split("").slice(e+1);
        my_string = [...front, ...strs, ...back].join("")
    }
    return my_string;
}